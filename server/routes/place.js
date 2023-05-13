import express from "express"
import placeModal from "../models/placeModel.js"

const router = express.Router()

// Lấy tất cả địa điểm
router.get("/", async (req, res, next) => {
  try {
    const limit = req.query.limit || 10

    const places = await placeModal.getLimit(limit)
    res.json(places)
  } catch (err) {
    next(err)
  }
})

export default router
