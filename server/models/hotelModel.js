import db from "../utils/db.js"

export default {
  getAll() {
    return db("khachsan")
  },

  async findById(id) {
    const list = await db("khachsan").where("ID", id)
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

  addHinhAnhKhachSan(hinhanh) {
    return db("HinhAnh_KhachSan").insert(hinhanh)
  },

  async getHotelTrung(name) {
    return await db("khachsan").where("DiaChi", name)
  },

  async search(keyWord) {
    const result = await db.raw(
      `SELECT * FROM khachsan WHERE MATCH(Ten) AGAINST("${keyWord}") AND TrangThai = 1
      UNION
      SELECT * FROM khachsan WHERE MATCH(DiaChi) AGAINST("${keyWord}") AND TrangThai = 1`
    )
    return result[0]
  },

  async add(khachsan) {
    // console.log(user.password);
    const result = await db("khachsan").insert(khachsan)
    return result[0]
  },

  update(khachsan) {
    return db("khachsan").where("ID", khachsan.ID).update(khachsan)
  },
  addHinhAnhKhachSan(hinhanh) {
    return db("hinhanh_khachsan").insert(hinhanh)
  },
  addGiuongPhong(giuong) {
    return db("giuong_phong").insert(giuong)
  },
  async getHotelTrung(name) {
    return await db("khachsan").where("DiaChi", name)
  },
  async getIDDiaDiem(name) {
    const [ID] = await db.raw(`SELECT ID FROM diadiem WHERE 
    '${name}' LIKE CONCAT('%', TenDiaDiem, '%');`)
    return ID[0].ID
  },
}
