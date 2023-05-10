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
  async add(khachsan) {
    // console.log(user.password);
    const result = await db("khachsan").insert(khachsan);
    return result[0]
  },
  addHinhAnhKhachSan(hinhanh) {
    return db("HinhAnh_KhachSan").insert(hinhanh);
  },
  async getHotelTrung(name) {
    return await db("khachsan").where("DiaChi", name)
  },
  async getIDDiaDiem(name) {
    const [ID] = await db.raw(`SELECT ID FROM diadiem WHERE 
    '${name}' LIKE CONCAT('%', TenDiaDiem, '%');`);
    return ID[0].ID
  }
}
