import express from "express"
import hotelModel from "../models/hotelModel.js"
import promotionModel from "../models/promotionModel.js"
import { facility, addHotel } from "../controller/hotelier.js"
const router = express.Router()

// Lấy dữ liệu hiện danh sách khuyến mãi
router.get("/promotion", async (req, res, next) => {
  try {
    const idCKS = req.query.idCKS || 1

    const vouchers = await promotionModel.getVoucherByHotelierId(idCKS)
    const flashSales = await promotionModel.getFlashSaleByHotelierId(idCKS)

    res.json({ vouchers, flashSales })
  } catch (err) {
    next(err)
  }
})

// Lấy dữ liệu hiện form thêm khuyến mãi
router.get("/promotion/insert", async (req, res, next) => {
  try {
    const idCKS = req.query.idCKS || 1

    const hotels = await hotelModel.findByHotelierId(idCKS)
    const periods = await promotionModel.getPeriods(idCKS)

    res.json({ hotels, periods })
  } catch (err) {
    next(err)
  }
})

// Thực hiện thêm khuyến mãi
router.post("/promotion/insert", async (req, res, next) => {
  try {
    const khuyenmai = req.body.khuyenmai

    await promotionModel.add(khuyenmai)

    res.json(khuyenmai)
  } catch (err) {
    next(err)
  }
})

// Lấy dữ liệu hiện danh sách tiện ích
router.get("/facility", facility)

// Thực hiện thêm khách sạn
router.post("/addHotel", addHotel)
export default router
