import db from "../utils/db.js"

export default {
  // Lấy tất cả khách sạn
  getAll() {
    return db("khachsan")
  },

  // Lấy khách sạn theo ID
  // getHotelByID(id) {
  //   return db("khachsan").where("ID", id)
  // },

  // Lấy khách sạn theo ID
  async findById(id) {
    const list = await db("khachsan").where("ID", id)
    if (list.length === 0) return null

    return list[0]
  },

  // Lấy khách sạn theo ID chủ khách sạn
  getHotelByIDCKS(id) {
    return db("khachsan").where("IDChuKhachSan", id)
  },

  async getPicByHotelId(id) {
    return await db("hinhanh_khachsan").where("IDKhachSan", id)
  },

  async getFeedBackByHotelId(id) {
    const result = await db.raw(
      `SELECT * FROM danhgia, nguoidung WHERE danhgia.IDKhachHang = nguoidung.ID and danhgia.IDKhachSan=?`,
      id
    )
    return result[0]
  },

  async getAllImage() {
    return await db("hinhAnh_khachSan")
  },

  // Tìm kiếm khách sạn theo từ khóa
  async search(keyWord) {
    const result = await db.raw(
      `SELECT * FROM khachsan WHERE MATCH(Ten) AGAINST("${keyWord}") AND TrangThai = 1
      UNION
      SELECT * FROM khachsan WHERE MATCH(DiaChi) AGAINST("${keyWord}") AND TrangThai = 1`
    )
    return result[0]
  },

  // Thêm khách sạn
  async add(khachsan) {
    const result = await db("khachsan").insert(khachsan)
    return result[0]
  },

  // Cập nhật khách sạn
  update(khachsan) {
    return db("khachsan").where("ID", khachsan.ID).update(khachsan)
  },

  // Thêm hình ảnh cho khách sạn
  addHinhAnhKhachSan(hinhanh) {
    return db("hinhanh_khachsan").insert(hinhanh)
  },

  // Thêm giường
  addGiuongPhong(giuong) {
    return db("giuong_phong").insert(giuong)
  },

  // Cập nhật giường phòng
  updateGiuongPhong(giuong) {
    return db("giuong_phong")
      .where("IDPhong", giuong.IDPhong)
      .andWhere("IDGiuong", giuong.IDGiuong)
      .update(giuong)
  },

  // Lấy khách sạn trùng địa chỉ
  async getHotelTrung(name) {
    return await db("khachsan").where("DiaChi", name)
  },

  // Lấy hình ảnh theo ID khách sạn
  async getImage(id) {
    return await db("hinhanh_khachsan").where("IDKhachSan", id)
  },

  // Xóa khách sạn
  del(id) {
    return db("khachsan").where("ID", id).del()
  },
}
