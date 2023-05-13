import express from "express"
import hotelModel from "../models/hotelModel.js"
import promotionModel from "../models/promotionModel.js"

const router = express.Router()

// Lấy dữ liệu hiện danh sách khuyến mãi
router.get("/", async (req, res, next) => {
  try {
    const idCKS = req.query.idCKS || 2

    const promotions = await promotionModel.getPromotionByHotelierId(idCKS)
    const periods = await promotionModel.getPeriods()

    res.json({ promotions, periods })
  } catch (err) {
    next(err)
  }
})

// Lấy dữ liệu hiện form thêm khuyến mãi
router.get("/insert", async (req, res, next) => {
  try {
    const idCKS = req.query.idCKS || 2

    const hotels = await hotelModel.getHotelByIDCKS(idCKS)
    const periods = await promotionModel.getPeriods()

    res.json({ hotels, periods })
  } catch (err) {
    next(err)
  }
})

// Thực hiện thêm khuyến mãi
router.post("/insert", async (req, res, next) => {
  try {
    const khuyenmai = req.body.khuyenmai

    const result = await promotionModel.add(khuyenmai)

    res.json(result)
  } catch (err) {
    next(err)
  }
})

// Xóa khuyến mãi
router.get("/del", async (req, res, next) => {
  try {
    const idPromotion = req.query.idPromotion

    if (idPromotion) {
      await promotionModel.del(idPromotion)
    }

    res.json({ idPromotion })
  } catch (err) {
    next(err)
  }
})

// Chỉnh sửa khuyến mãi
router.get("/update", async (req, res, next) => {
  try {
    // const idCKS = req.query.idCKS || 2
    const idPromotion = req.query.idPromotion || 1

    // const hotels = await hotelModel.findByHotelierId(idCKS)
    const promotion = await promotionModel.findById(idPromotion)
    // const periods = await promotionModel.getPeriods()

    res.json(promotion)
  } catch (err) {
    next(err)
  }
})

router.post("/update", async (req, res, next) => {
  try {
    const khuyenmai = req.body.khuyenmai

    await promotionModel.update(khuyenmai)

    res.json(khuyenmai)
  } catch (err) {
    next(err)
  }
})

export default router
