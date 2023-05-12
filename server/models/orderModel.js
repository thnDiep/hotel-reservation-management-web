import db from "../utils/db.js"

export default {
  // Lấy tất cả đơn đặt phòng
  getAll() {
    return db("dondatphong")
  },

  // Lấy thông tin đơn đặt phòng
  async getAllInformation() {
    return await db.raw(
      `SELECT nguoidung.HoTen, khachsan.Ten, phong.TenLoaiPhong, dondatphong.NgayNhanPhong, dondatphong.NgayTraPhong, nguoidung.SoDienThoai, dondatphong.TongTien, dondatphong.TrangThai, dondatphong.MaDatPhong
      FROM dondatphong
      INNER JOIN nguoidung ON dondatphong.IDKhachHang = nguoidung.ID
      INNER JOIN phong_dondatphong ON dondatphong.MaDatPhong = phong_dondatphong.MaDonDatPhong
      INNER JOIN phong ON phong_dondatphong.IDPhong = phong.ID
      INNER JOIN khachsan ON phong.IDKhachSan = khachsan.ID;`
    )
  },

  // Tìm đơn đặt phòng bằng id
  async findById(id) {
    const list = await db("dondatphong").where("MaDatPhong", id)
    if (list.length === 0) return null
    return list[0]
  },

  // Tìm đơn đặt phòng
  async findByIdToCheckPhone(id) {
    let list = null
    if (this.findById(id) !== null) {
      list = await db.raw(
        `SELECT nguoidung.SoDienThoai FROM dondatphong, nguoidung WHERE dondatphong.IDKhachHang = nguoidung.ID and dondatphong.MaDatPhong=?`,
        id
      )
    }

    return list[0]
  },

  // Xóa đơn đặt phòng
  del(id) {
    return db("dondatphong").where("MaDatPhong", id).del()
  },
}
