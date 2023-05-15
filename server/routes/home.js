import express from "express"
import authModel from "../models/authModel.js"
import hotelModel from "../models/hotelModel.js"
import placeModal from "../models/placeModel.js"
import roomModel from "../models/roomModel.js"
import promotionModel from "../models/promotionModel.js"
import wishListModel from "../models/wishListModel.js"
import facilityModel from "../models/facilityModel.js"
import feedbackModel from "../models/feedbackModel.js"

const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const idUser = req.query.idUser || 1
    const curUser = await authModel.findById(idUser)

    // Chủ khách sạn
    if (curUser.PhanQuyen === 1) {
      const hotels = await hotelModel.getHotelByIDCKS(idUser)
      const promotions = await promotionModel.getPromotionByHotelierId(idUser)
      const periods = await promotionModel.getPeriods()

      // thêm tên tiện nghi
      for (const hotel of hotels) {
        const id = await facilityModel.getTienIchKhachSan(hotel.ID)
        const phongs = await roomModel.getAllByKhachSan(hotel.ID)
        const image = await hotelModel.getImage(hotel.ID)
        let check = ""
        for (const i of id) {
          const ten = await facilityModel.getTenTienNghi(i.IDTienNghi)
          check += ten.TenTienNghi + ", "
        }

        for (const phong of phongs) {
          const id = await facilityModel.getTienIchPhong(phong.ID)
          const imageRoom = await hotelModel.getImageRoom(phong.ID)
          let check = ""
          for (const i of id) {
            const ten = await facilityModel.getTenTienNghiPhong(i.IDTienNghi)
            check += ten.TenTienNghi + ", "
          }
          phong.TienNghi = check
          phong.HinhAnh = imageRoom
        }

        hotel.tienNghi = check
        hotel.phong = phongs
        hotel.HinhAnh = image
      }

      res.json({ hotels, promotions, periods, curUser })
    } else if (curUser.PhanQuyen === 0) {
      // User
      const hotels = await hotelModel.getAll()
      const users = await authModel.getAll()
      const rates = await feedbackModel.getAll()
      const hotelImages = await hotelModel.getAllImage()
      const places = await placeModal.getAll()
      const rooms = await roomModel.getAll()
      const promotions = await promotionModel.getAll()
      const periods = await promotionModel.getPeriods()
      const likes = await wishListModel.getWishList1(idUser)

      for (const hotel of hotels) {
        hotel.ChuKhachSan = await authModel.findById(hotel.IDChuKhachSan)
        hotel.DanhGia = await feedbackModel.getAvgRate(hotel.ID)
        const HinhAnh = await hotelModel.getImage(hotel.ID)
        hotel.HinhAnh = HinhAnh[0].HinhAnh
        if (hotel.DanhGia) {
          hotel.DanhGia = parseInt(hotel.DanhGia).toFixed(2)
        } else {
          hotel.DanhGia = Number(0).toFixed(1)
        }
      }
      for (const room of rooms) {
        room.endows = await roomModel.getEndow(room.ID)
      }
      res.json({
        hotels,
        users,
        rates,
        hotelImages,
        places,
        rooms,
        promotions,
        periods,
        likes,
      })
    } else if (curUser.PhanQuyen === 2) {
      const hotels = await hotelModel.getAll()
      const users = await authModel.getAll()
      const rates = await feedbackModel.getAll()
      const hotelImages = await hotelModel.getAllImage()
      const places = await placeModal.getAll()
      for (const hotel of hotels) {
        hotel.ChuKhachSan = await authModel.findById(hotel.IDChuKhachSan)
        hotel.DanhGia = await feedbackModel.getAvgRate(hotel.ID)
        const HinhAnh = await hotelModel.getImage(hotel.ID)
        hotel.HinhAnh = HinhAnh[0].HinhAnh
        if (hotel.DanhGia) {
          hotel.DanhGia = parseInt(hotel.DanhGia).toFixed(2)
        } else {
          hotel.DanhGia = Number(0).toFixed(1)
        }
      }
      res.json({
        hotels,
        users,
        rates,
        hotelImages,
        places,
      })
    }
  } catch (err) {
    next(err)
  }
})

export default router
