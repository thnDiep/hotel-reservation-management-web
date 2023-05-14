import express from "express";
import hotelModel from "../models/hotelModel.js";
import authModel from "../models/authModel.js";
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
      hotel.DanhGia = await feedbackModel.getAvgRate(hotel.ID);
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
      hotel.phong = max.TenLoaiPhong;
      if (hotel.DanhGia) {
        hotel.DanhGia = parseInt(hotel.DanhGia).toFixed(2);
      } else {
        hotel.DanhGia = Number(0).toFixed(1);
      }
    }
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
    const feedbackHotel = await feedbackModel.getFeedBackByHotelId(idHotel);
    const picHotel = await hotelModel.getPicByHotelId(idHotel);
    const infor = await hotelModel.findById(idHotel);
    const score = await feedbackModel.getAvgScore(idHotel);
    infor.avgScore = score[0][0]["ROUND(AVG(CAST(Diem AS FLOAT)), 1)"];

    // Lấy % tiêu chí đánh giá (tuyệt vời, xuất sắc,...)
    const n = await feedbackModel.getCount(idHotel);
    const perfect = await feedbackModel.getGreaterThan9(idHotel);
    const execellent = await feedbackModel.getGreaterThan8(idHotel);
    const good = await feedbackModel.getGreaterThan7(idHotel);
    const medium = await feedbackModel.getGreaterThan6(idHotel);
    const bad = await feedbackModel.getLessThanOrEqualTo6(idHotel);

    infor.perfect = perfect[0][0]["COUNT(ID)"];
    infor.execellent = execellent[0][0]["COUNT(ID)"];
    infor.good = good[0][0]["COUNT(ID)"];
    infor.medium = medium[0][0]["COUNT(ID)"];
    infor.bad = bad[0][0]["COUNT(ID)"];

    infor.perfectPercent = (perfect[0][0]["COUNT(ID)"] / n) * 100;
    infor.execellentPercent = (execellent[0][0]["COUNT(ID)"] / n) * 100;
    infor.goodPercent = (good[0][0]["COUNT(ID)"] / n) * 100;
    infor.mediumPercent = (medium[0][0]["COUNT(ID)"] / n) * 100;
    infor.badPercent = (bad[0][0]["COUNT(ID)"] / n) * 100;
    //  Lấy thông tin hữu ích
    const thongTinHuuIch = await facilityModel.getThongTinHuuIch();
    for (const thongTin of thongTinHuuIch) {
      thongTin.NoiDung = await facilityModel.getThongTinHuuIcKhachSan(
        idHotel,
        thongTin
      );
    }
    //   lấy danh sách tiện nghi của khách sạn đó
    const typesHotel = await facilityModel.getLoaiTienNghi();
    for (const type of typesHotel) {
      const facilityOfHotels = await facilityModel.getNameOfLoaiKhachSan(
        type.ID
      );
      const tienNghi = [];
      for (let i = 0; i < facilityOfHotels.length; i++) {
        //lấy fac
        const facHotel = await facilityModel.getFacilityOfHotel(
          facilityOfHotels[i],
          idHotel
        );
        if (facHotel !== null) tienNghi.push(facHotel);
        //console.log(tienNghi);
      }
      type.tienNghi = tienNghi;
    }

    // Thêm các thông tin của phòng
    const rooms = await roomModel.getAllByKhachSan(idHotel);
    let minPrice = 1000000000;
    for (const room of rooms) {
      const [uuDai] = await roomModel.getEndow(room.ID);
      room.UuDai = uuDai;
      room.HinhAnh = await roomModel.getHinhAnh(room.ID);
      const typesPhong = await facilityModel.getLoaiTienNghiRoom();
      for (const type of typesPhong) {
        const facilityOfRooms = await facilityModel.getNameOfLoaiPhong(type.ID);
        const tienNghi = [];
        for (let i = 0; i < facilityOfRooms.length; i++) {
          //lấy fac
          const facRoom = await facilityModel.getFacilityOfRoom(
            facilityOfRooms[i],
            room.ID
          );
          if (facRoom !== null) tienNghi.push(facRoom);
          //console.log(tienNghi);
        }
        type.tienNghi = tienNghi;
      }
      room.GiamGia = infor.GiamGia;
      room.tienNghi = typesPhong;
      room.GiaSale = room.Gia - (room.Gia * room.GiamGia) / 100;
      if (+room.GiaSale < minPrice) {
        minPrice = +room.GiaSale;
        infor.Gia = +room.Gia;
      }
    }
    infor.GiaSale = minPrice;
    res.json({
      rooms,
      thongTinHuuIch,
      infor,
      picHotel,
      feedbackHotel,
      typesHotel,
    });
  } catch (err) {
    next(err);
  }
});

export default router;
