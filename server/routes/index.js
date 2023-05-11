import authRouter from "./auth.js"
import promotionRouter from "./promotion.js"
import hotelierRouter from "./hotelier.js"
import profileRouter from "./profile.js"
import adminRouter from "./admin.js"
import hotelRouter from "./hotel.js"
import userRouter from "./user.js"

import hotelModel from "../models/hotelModel.js"
import authModel from "../models/authModel.js"
import rateModal from "../models/rateModal.js"
import placeModal from "../models/placeModel.js"
import roomModel from "../models/roomModel.js"

export default function route(app) {
  app.use("/auth", authRouter)
  app.use("/cks/promotion", promotionRouter)
  app.use("/cks", hotelierRouter)
  app.use("/profile", profileRouter)
  app.use("/admin", adminRouter)
  app.use("/user", userRouter)
  app.use("/hotel", hotelRouter)

  app.get("/place", async (req, res, next) => {
    try {
      const limit = req.query.limit || 10

      const places = await placeModal.getLimit(limit)
      res.json(places)
    } catch (err) {
      next(err)
    }
  })

  app.get("/", async (req, res, next) => {
    try {
      const idUser = req.query.idUser || 1
      const curUser = await authModel.findById(idUser)

      const hotels = await hotelModel.getAll()
      hotels.map(async (hotel) => {
        hotel.ChuKhachSan = await authModel.findById(hotel.IDChuKhachSan)
        hotel.DanhGia = await rateModal.getAvgRate(hotel.ID)
        // hotel.SoDanhGia = await rateModal.getCount(hotel.ID)
        // hotel.Phong = await hotelModel.getRoom(hotel.ID)

        if (hotel.DanhGia) {
          hotel.DanhGia = parseInt(hotel.DanhGia).toFixed(2)
        } else {
          hotel.DanhGia = Number(0).toFixed(1)
        }
      })
      const users = await authModel.getAll()
      const rates = await rateModal.getAll()
      const hotelImages = await hotelModel.getAllImage()
      const places = await placeModal.getAll()
      const rooms = await roomModel.getAll()

      res.json({ hotels, users, rates, hotelImages, places, rooms })
    } catch (err) {
      next(err)
    }
  })
}
