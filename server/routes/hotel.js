import express from "express"
import hotelModel from "../models/hotelModel.js"

const router = express.Router()

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

export default router
