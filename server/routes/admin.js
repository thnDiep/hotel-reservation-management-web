import express from "express"
import authModel from "../models/authModel.js"

const router = express.Router()

// Lấy tất cả người dùng
router.get("/account", async (req, res, next) => {
  try {
    const allAccount = await authModel.getAll()
    res.json(allAccount)
  } catch (err) {
    next(err)
  }
})

export default router
