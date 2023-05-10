import authRouter from "./auth.js"
import promotionRouter from "./promotion.js"
import hotelierRouter from "./hotelier.js"
import profileRouter from "./profile.js"
import adminRouter from "./admin.js"
import hotelRouter from "./hotel.js"

import hotelModel from "../models/hotelModel.js"
import authModel from "../models/authModel.js"
import rateModal from "..//models/rateModal.js"

export default function route(app) {
  app.use("/auth", authRouter)
  app.use("/cks/promotion", promotionRouter)
  app.use("/cks", hotelierRouter)
  app.use("/profile", profileRouter)
  app.use("/admin", adminRouter)
  app.use("/hotel", hotelRouter)

  app.get("/", async (req, res, next) => {
    try {
      const idUser = req.query.idUser || 5
      const curUser = await authModel.findById(idUser)

      if (curUser.PhanQuyen === 2) {
        const hotels = await hotelModel.getAll()
        hotels.map(async (hotel) => {
          hotel.ChuKhachSan = await authModel.findById(hotel.IDChuKhachSan)
          hotel.DanhGia = await rateModal.getAvgRate(hotel.ID)
          if (hotel.DanhGia) {
            hotel.DanhGia = parseInt(hotel.DanhGia).toFixed(2)
          } else {
            hotel.DanhGia = Number(0).toFixed(2)
          }
        })
        const users = await authModel.getAll()
        const rates = await rateModal.getAll()
        res.json({ hotels, users, rates })
      } else {
        const hotels = await hotelModel.getAll()
        res.json({ hotels })
      }
    } catch (err) {
      next(err)
    }
  })
}
