import express from "express";
import hotelModel from "../models/hotelModel.js";
import {
  facility,
  addHotel,
  addRoom,
  facilityRoom,
  order,
} from "../controller/hotelier.js";

const router = express.Router();

// Search khách sạn
router.get("/search", async (req, res, next) => {
  try {
    const key = req.query.key;

    const result = await hotelModel.search(key.place);
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
    const idHotel = 8;
    const feedbackHotel = await hotelModel.getFeedBackByHotelId(idHotel);
    const picHotel = await hotelModel.getPicByHotelId(idHotel);
    const infor = await hotelModel.findById(idHotel);
    console.log(infor);
    res.json({ infor, picHotel, feedbackHotel });
  } catch (err) {
    next(err);
  }
});

export default router;
