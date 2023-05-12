import db from "../utils/db.js"

export default {
  // Lấy tất cả đơn đặt phòng
  getAll() {
    return db("dondatphong")
  },

  // Lấy thông tin đơn đặt phòng
  async getAllInformation() {
    return await db.raw(
      `SELECT nguoidung.HoTen,nguoidung.HinhAnh, khachsan.Ten, phong.TenLoaiPhong, dondatphong.NgayNhanPhong, dondatphong.NgayTraPhong, nguoidung.SoDienThoai, dondatphong.TongTien, dondatphong.TrangThai, dondatphong.MaDatPhong
      FROM dondatphong
      INNER JOIN nguoidung ON dondatphong.IDKhachHang = nguoidung.ID
      INNER JOIN phong ON dondatphong.IDPhong = phong.ID
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

  //lấy thông tin đơn đặt hàng
  async getOrder(ID) {
    //thông tin đơn đặt phòng
    const orderInfo = await db("dondatphong").where("IDKhachHang", ID)

    if (orderInfo.length === 0) return null

    //lấy thông tin phòng
    const room = await db("phong").where("ID", orderInfo[0].IDPhong)

    //lấy thông tin khách sạn
    const hotelInfo = await db("khachsan").where("ID", room[0].IDKhachSan)

    orderInfo.forEach((item) => {
      item.TenKhachSan = hotelInfo[0].Ten
    })

    orderInfo[0].TenKhachSan = hotelInfo[0].Ten
    orderInfo[0].TenLoaiPhong = room[0].TenLoaiPhong
    orderInfo[0].SoNguoi = room[0].SoNguoi
    console.log(orderInfo)
    return orderInfo
  },

  //lấy thông tin đơn đặt hàng
  async getOrder(ID) {
    //thông tin đơn đặt phòng
    const orderInfo = await db("dondatphong").where("IDKhachHang", ID)

    if (orderInfo.length === 0) return null

    //lấy thông tin phòng
    const room = await db("phong").where("ID", orderInfo[0].IDPhong)

    //lấy thông tin khách sạn
    const hotelInfo = await db("khachsan").where("ID", room[0].IDKhachSan)

    orderInfo[0].TenKhachSan = hotelInfo[0].Ten
    orderInfo[0].TenLoaiPhong = room[0].TenLoaiPhong
    orderInfo[0].SoNguoi = room[0].SoNguoi
    return orderInfo
  },

  //lấy thông tin đơn đặt hàng
  async getOrderByOrderCode(MaDatPhong) {
    //thông tin đơn đặt phòng
    const orderInfo = await db("dondatphong").where("MaDatPhong", MaDatPhong)

    if (orderInfo.length === 0) return null

    //thông tin khách hàng
    const user = await db("NguoiDung").where("ID", orderInfo[0].IDKhachHang)

    //lấy thông tin phòng
    const room = await db("phong").where("ID", orderInfo[0].IDPhong)

    //lấy thông tin giường
    const bed = await db("giuong_phong").where("IDPhong", room[0].ID)
    const bedInfo = await db("giuong").where("ID", bed[0].IDGiuong)

    //lấy thông tin khách sạn
    const hotelInfo = await db("khachsan").where("ID", room[0].IDKhachSan)

    orderInfo[0].TenKhachSan = hotelInfo[0].Ten
    orderInfo[0].DiaChi = hotelInfo[0].DiaChi

    orderInfo[0].TenLoaiPhong = room[0].TenLoaiPhong
    orderInfo[0].SoNguoi = room[0].SoNguoi
    orderInfo[0].Gia = room[0].Gia

    orderInfo[0].SoGiuong = bed[0].SoLuongGiuong
    orderInfo[0].TenLoaiGiuong = bedInfo[0].LoaiGiuong

    orderInfo[0].TenKhachHang = user[0].HoTen
    orderInfo[0].SoDienThoaiKhachHang = user[0].SoDienThoai
    orderInfo[0].EmailKhachHang = user[0].Email

    return orderInfo
  },
}
