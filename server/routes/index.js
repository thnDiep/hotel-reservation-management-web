import authRouter from "./auth.js";
import promotionRouter from "./promotion.js";
import hotelierRouter from "./hotelier.js";
import profileRouter from "./profile.js";
import adminRouter from "./admin.js";
import hotelRouter from "./hotel.js";
import userRouter from "./user.js";

import hotelModel from "../models/hotelModel.js";
import authModel from "../models/authModel.js";
import rateModal from "..//models/rateModal.js";
import facilityModel from "../models/facilityModel.js";
import roomModel from "../models/roomModel.js";
import placeModal from "../models/placeModel.js";
export default function route(app) {
  app.use("/auth", authRouter);
  app.use("/cks/promotion", promotionRouter);
  app.use("/cks", hotelierRouter);
  app.use("/profile", profileRouter);
  app.use("/admin", adminRouter);
  app.use("/user", userRouter);
  app.use("/hotel", hotelRouter);

  app.get("/place", async (req, res, next) => {
    try {
      const limit = req.query.limit || 10;

      const places = await placeModal.getLimit(limit);
      res.json(places);
    } catch (err) {
      next(err);
    }
  });

  app.get("/", async (req, res, next) => {
    try {
      const idUser = req.query.idUser || 5;
      const curUser = await authModel.findById(idUser);
      if (curUser.PhanQuyen === 2) {
        const hotels = await hotelModel.getAll();
        hotels.map(async (hotel) => {
          hotel.ChuKhachSan = await authModel.findById(hotel.IDChuKhachSan);
          hotel.DanhGia = await rateModal.getAvgRate(hotel.ID);
          if (hotel.DanhGia) {
            hotel.DanhGia = parseInt(hotel.DanhGia).toFixed(2);
          } else {
            hotel.DanhGia = Number(0).toFixed(2);
          }
        });
        const users = await authModel.getAll();
        const rates = await rateModal.getAll();
        res.json({ hotels, users, rates });
      } else if (curUser.PhanQuyen === 1) {
        const hotels = await hotelModel.getHotelByIDCKS(idUser);
        // thêm tên tiện nghi
        for (const hotel of hotels) {
          const id = await facilityModel.getTienIchKhachSan(hotel.ID);
          const phongs = await roomModel.getAll(hotel.ID);
          const image = await hotelModel.getImage(hotel.ID);
          let check = "";
          for (const i of id) {
            const ten = await facilityModel.getTenTienNghi(i.IDTienNghi);
            check += ten.TenTienNghi + ", ";
          }

          for (const phong of phongs) {
            const id = await facilityModel.getTienIchPhong(phong.ID);
            let check = "";
            for (const i of id) {
              const ten = await facilityModel.getTenTienNghiPhong(i.IDTienNghi);
              check += ten.TenTienNghi + ", ";
            }
            phong.TienNghi = check;
          }

          hotel.tienNghi = check;
          hotel.phong = phongs;
          hotel.HinhAnh = image;
        }

        res.json({ hotels });
      } else {
        const hotels = await hotelModel.getAll();
        res.json({ hotels });
      }
    } catch (err) {
      next(err);
    }
  });
}
