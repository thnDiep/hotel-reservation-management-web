import express from "express"
import hotelModel from "../models/hotelModel.js"
import profileModel from "../models/profileModel.js"
import {
  facility,
  addHotel,
  addRoom,
  facilityRoom,
  order,
} from "../controller/hotelier.js"
import feedbackModel from "../models/feedbackModel.js"

const router = express.Router()

// Search khách sạn
router.get("/search", async (req, res, next) => {
  try {
    const key = req.query.key

    const result = await hotelModel.search(key.place)
    res.json(result)
  } catch (err) {
    next(err)
  }
})

// Chỉnh sửa khách sạn
router.post("/update", async (req, res, next) => {
  try {
    const khachsan = req.body.khachsan

    await hotelModel.update(khachsan)

    res.json(khachsan)
  } catch (err) {
    next(err)
  }
})

// lấy thông tin chi tiết khách sạn
router.get("/detail", async (req, res, next) => {
  try {
    const idHotel = req.query.idKs
    // const idHotel = 8;
    const feedbackHotel = await hotelModel.getFeedBackByHotelId(idHotel)
    const picHotel = await hotelModel.getPicByHotelId(idHotel)
    const infor = await hotelModel.findById(idHotel)
    const score = await feedbackModel.getAvgScore()
    infor.avgScore = score[0][0]["ROUND(AVG(CAST(Diem AS FLOAT)), 1)"]
    res.json({ infor, picHotel, feedbackHotel })
  } catch (err) {
    next(err)
  }
})

export default router
