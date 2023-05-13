import db from "../utils/db.js"
export default {
  getAll() {
    return db("khuyenmai")
  },

  getPeriods() {
    return db("khunggio")
  },

  async findById(id) {
    const list = await db("khuyenmai").where("id", id)
    if (list.length === 0) return null

    return list[0]
  },

  async getPromotionByHotelierId(hotelierID) {
    const hotels = await db("khachsan").where("IDChuKhachSan", hotelierID)
    if (hotels.length === 0) return []
    const ids = []
    hotels.forEach((hotel) => {
      ids.push(hotel.ID)
    })
    return await db("khuyenmai").whereIn("IDKhachSan", ids)
  },

  add(promotion) {
    return db("khuyenmai").insert(promotion)
  },

  del(id) {
    return db("khuyenmai").where("ID", id).del()
  },

  update(promotion) {
    return db("khuyenmai").where("ID", promotion.ID).update(promotion)
  },
}
