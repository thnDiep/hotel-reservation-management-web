import express from "express"
import hotelModel from "../models/hotelModel.js"
import promotionModel from "../models/promotionModel.js"
import { facility, addHotel } from "../controller/hotelier.js"
const router = express.Router()

// Lấy dữ liệu hiện danh sách tiện ích
router.get("/facility", facility)

// Thực hiện thêm khách sạn
router.post("/addHotel", addHotel)
export default router
