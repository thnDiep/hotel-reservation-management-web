import express from "express";
import hotelModel from "../models/hotelModel.js";
import promotionModel from "../models/promotionModel.js";
import { order } from "../controller/hotelier.js";
import {
  facility,
  addHotel,
  updateHotel,
  addRoom,
  facilityRoom,
} from "../controller/hotelier.js";
import facilityModel from "../models/facilityModel.js";
import roomModel from "../models/roomModel.js";
import orderModel from "../models/orderModel.js";
const router = express.Router();

// Lấy dữ liệu hiện danh sách tiện ích
router.get("/facility", facility);

// Lấy dữ liệu hiện danh sách tiện ích phòng
router.get("/room/facility", facilityRoom);

// Thực hiện thêm khách sạn
router.post("/hotel/insert", addHotel);
router.post("/hotel/update", updateHotel);

// Lấy dữ liệu hiện các đơn đặt phòng
router.get("/order", order);
// duyệt
router.get("/order/update", async (req, res, next) => {
  try {
    const MaDatPhong = req.query.MaDatPhong;
    await orderModel.updateTrangThai(MaDatPhong);
    res.json({ MaDatPhong });
  } catch (err) {
    next(err);
  }
});

// Thực hiện thêm phong
router.post("/room/insert", addRoom);
// router.post("/room/update", addRoom);

router.get("/hotel/del", async (req, res, next) => {
  try {
    const idKhachSan = req.query.idKhachSan;
    // console.log(idKhachSan);
    if (idKhachSan) {
      const check = await roomModel.getAllByKhachSan(idKhachSan);
      console.log(check);
      if (check.length !== 0) {
        next(
          res.status(400).send("Bạn phải xóa phòng trước khi xóa khách sạn")
        );
      } else {
        await hotelModel.delRoomByIDKS(idKhachSan);
        await hotelModel.delWashListIDKS(idKhachSan);
        await hotelModel.delTienNghiIDKS(idKhachSan);
        await hotelModel.delKhuyenMaiIDKS(idKhachSan);
        await hotelModel.delHinhAnhIDKS(idKhachSan);
        await hotelModel.delThongIDKS(idKhachSan);
        await hotelModel.del(idKhachSan);
        res.json({ idKhachSan });
      }
    }
  } catch (err) {
    next(err);
  }
});

router.get("/room/del", async (req, res, next) => {
  try {
    const idPhong = req.query.IDPhong;
    console.log(idPhong);
    if (idPhong) {
      await hotelModel.delTienNghiIDRoom(idPhong);
      await hotelModel.delHinhAnhIDPhong(idPhong);
      await hotelModel.delUuDaiIDPhong(idPhong);
      await hotelModel.delRoom(idPhong);
    }

    res.json({ idPhong });
  } catch (err) {
    next(err);
  }
});
router.get("/order/del", async (req, res, next) => {
  try {
    const MaDatPhong = req.query.MaDatPhong;
    console.log("Nó nữa meeeeeeeeeeeeeeeeee:", MaDatPhong);

    if (MaDatPhong) {
      await hotelModel.delOrder(MaDatPhong);
    }

    res.json({ MaDatPhong });
  } catch (err) {
    next(err);
  }
});
// HinhAnh: url,
// hotel: hotel,
// tienNghi: IDTienNghi,
// thongTin: filteredThongTin,
router.get("/room/update", async (req, res, next) => {
  try {
    console.log("đâsdasd");
    const idKhachSan = req.query.IDKhachSan || 1;
    const idRoom = req.query.IDPhong || 1;

    const [room] = await roomModel.getRoomByID(idRoom);
    const [giuongDon] = await roomModel.getGiuong(idRoom, 1);
    room.GiuongDon = giuongDon.SoLuongGiuong;
    const [giuonDoi] = await roomModel.getGiuong(idRoom, 2);
    room.GiuongDoi = giuongDon.SoLuongGiuong;

    const hinhAnh = await roomModel.getImage(idRoom);
    const tienNghi = await facilityModel.getTienNghiPhong(idRoom);
    const uuDai = await facilityModel.getUuDaiphong(idRoom);
    const idUuDai = uuDai.map((item) => item.IDUuDai);
    const idTienNghi = tienNghi.map((item) => item.IDTienNghi);
    // const hotels = await hotelModel.findByHotelierId(idCKS)
    // const promotion = await promotionModel.findById(idPromotion);
    // // const periods = await promotionModel.getPeriods()
    const HinhAnh = hinhAnh.map((image) => image.HinhAnh);
    res.json({ room, HinhAnh, idTienNghi, idUuDai });
  } catch (err) {
    next(err);
  }
});

router.get("/hotel/update", async (req, res, next) => {
  try {
    const idKhachSan = req.query.IDKhachSan || 1;
    const idCKS = req.query.IDCKS || 1;
    const [hotel] = await hotelModel.findById(idKhachSan);
    const hinhAnh = await hotelModel.getImage(idKhachSan);
    const tienNghi = await facilityModel.getTienNghiKhachSan(idKhachSan);
    const thongTin = await facilityModel.getThongTinKhachSan(idKhachSan);
    const idTienNghi = tienNghi.map((item) => item.IDTienNghi);
    // const hotels = await hotelModel.findByHotelierId(idCKS)
    // const promotion = await promotionModel.findById(idPromotion);
    // // const periods = await promotionModel.getPeriods()
    const HinhAnh = hinhAnh.map((image) => image.HinhAnh);
    res.json({ hotel, HinhAnh, idTienNghi, thongTin });
  } catch (err) {
    next(err);
  }
});

router.get("/hotel/stop", async (req, res, next) => {
  try {
    const IDKhachSan = req.query.IDKhachSan;
    const TrangThai = req.query.TrangThai;
    console.log(IDKhachSan);
    if (IDKhachSan) {
      await hotelModel.updateTrangThai(IDKhachSan, TrangThai);
      res.json({ IDKhachSan });
    } else {
      next(res.status(400).send("Bạn phải xóa phòng trước khi xóa khách sạn"));
    }
  } catch (err) {
    next(err);
  }
});

export default router;
