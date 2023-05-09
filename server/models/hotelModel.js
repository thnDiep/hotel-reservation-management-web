import db from "../utils/db.js"

export default {
  getAll() {
    return db("khachsan")
  },
  async findById(id) {
    const list = await db("khachsan").where("id", id)
    if (list.length === 0) return null

    return list[0]
  },

  async findByHotelierId(hotelierID) {
    const hotels = await db("chukhachsan_khachsan").where(
      "IDChuKhachSan",
      hotelierID
    )
    if (hotels.length === 0) return null

    const ids = []
    hotels.forEach((hotel) => {
      ids.push(hotel.IDKhachSan)
    })
    return await db("khachsan").whereIn("ID", ids)
    // .andWhere("TrangThai", 0);
  },
}
