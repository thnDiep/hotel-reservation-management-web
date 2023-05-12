import express from "express";
import hotelModel from "../models/hotelModel.js";
import promotionModel from "../models/promotionModel.js";
import { order } from "../controller/hotelier.js";
import {
  facility,
  addHotel,
  addRoom,
  facilityRoom,
} from "../controller/hotelier.js";
const router = express.Router();

// Lấy dữ liệu hiện danh sách tiện ích
router.get("/facility", facility);

// Lấy dữ liệu hiện danh sách tiện ích phòng
router.get("/room/facility", facilityRoom);

// Thực hiện thêm khách sạn
router.post("/addHotel", addHotel);

// Lấy dữ liệu hiện các đơn đặt phòng
router.get("/order", order);

// Thực hiện thêm phong
router.post("/addRoom", addRoom);
export default router;
