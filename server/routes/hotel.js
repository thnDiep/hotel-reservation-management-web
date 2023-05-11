import express from "express";
import hotelModel from "../models/hotelModel.js";

const router = express.Router();

// Chỉnh sửa khách sạn
router.get("/", async (req, res, next) => {
  try {
    const key = req.query.key;
    console.log(key.place);
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

export default router;
