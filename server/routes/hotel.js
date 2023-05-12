import express from "express";
import hotelModel from "../models/hotelModel.js";
import authModel from "../models/authModel.js";
import rateModal from "../models/rateModal.js";
import profileModel from "../models/profileModel.js";
import {
  facility,
  addHotel,
  addRoom,
  facilityRoom,
  order,
} from "../controller/hotelier.js";
import feedbackModel from "../models/feedbackModel.js";
import roomModel from "../models/roomModel.js";
import facilityModel from "../models/facilityModel.js";

const router = express.Router();

// Search khách sạn
router.get("/search", async (req, res, next) => {
  try {
    const key = req.query.key;

    const result = await hotelModel.search(key.place);
    for (const hotel of result) {
      hotel.checked = true;
      hotel.ChuKhachSan = await authModel.findById(hotel.IDChuKhachSan);
      hotel.DanhGia = await rateModal.getAvgRate(hotel.ID);
      hotel.DanhGia = +hotel.DanhGia;
      hotel.HinhAnh = await hotelModel.getImage(hotel.ID);
      const DiaChi = hotel.DiaChi.replace(/Xã |Thành phố|Phường /g, "");
      const parts = DiaChi.split(",");
      const district = parts[parts.length - 2].trim().replace(/ +/g, " ");
      const ward = parts[parts.length - 3].trim().replace(/ +/g, " ");
      hotel.DiaChi = ward + ", " + district;
      const [min] = await roomModel.getGiaMin(hotel.ID);
      hotel.Gia = min["min(`Gia`)"];
      const max = await roomModel.getGiaMax(hotel.ID);
      console.log(max);
      hotel.phong = max.TenLoaiPhong;
      if (hotel.DanhGia) {
        hotel.DanhGia = parseInt(hotel.DanhGia).toFixed(2);
      } else {
        hotel.DanhGia = Number(0).toFixed(1);
      }
    }
    // console.log(result);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

// Chỉnh sửa khách sạn
router.post("/update", async (req, res, next) => {
  try {
    const khachsan = req.body.khachsan;

    await hotelModel.update(khachsan);

    res.json(khachsan);
  } catch (err) {
    next(err);
  }
});

// lấy thông tin chi tiết khách sạn
router.get("/detail", async (req, res, next) => {
  try {
    //const key = req.query.key;
    const idHotel = req.query.idKs || 8;
    //const idHotel = 8;
    const feedbackHotel = await hotelModel.getFeedBackByHotelId(idHotel);
    const picHotel = await hotelModel.getPicByHotelId(idHotel);
    const infor = await hotelModel.findById(idHotel);
    const score = await feedbackModel.getAvgScore(idHotel);
    infor.avgScore = score[0][0]["ROUND(AVG(CAST(Diem AS FLOAT)), 1)"];

    const types = await facilityModel.getLoaiTienNghi();
    console.log(types);
    for (let typeKS of types) {
      const facilityOfHotels = await facilityModel.getNameOfLoai(typeKS.ID);
      // console.log(facilityOfHotels);
      const tienNghi = [];
      for (let i = 0; i < facilityOfHotels.length; i++) {
        const facHotel = await facilityModel.getFacilityOfHotel(
          facilityOfHotels[i].ID
        );
        console.log(tienNghi);
        //facHotel.Ten = facilityOfHotels[i].TenTienNghi;
        if (facHotel !== null) tienNghi.push(facHotel);
        //console.log(tienNghi);
      }
      typeKS.tienNghi = tienNghi;
    }
    res.json({ infor, picHotel, feedbackHotel, types });
  } catch (err) {
    next(err);
  }
});

export default router;
