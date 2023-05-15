import db from "../utils/db.js"

export default {
  // Lấy tất cả khách sạn
  getAll() {
    return db("khachsan")
  },

  getActive() {
    return db("khachsan").where("TrangThai", 1)
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
  addHinhAnhPhong(hinhanh) {
    return db("hinhanh_phong").insert(hinhanh)
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

  // Lấy hình ảnh theo ID phòng
  async getImageRoom(id) {
    return await db("hinhanh_phong").where("IDPhong", id)
  },

  del(id) {
    return db("khachsan").where("ID", id).del()
  },
  delWashListIDKS(id) {
    return db("danhsachyeuthich").where("IDKhachSan", id).del()
  },
  delTienNghiIDKS(id) {
    return db("tiennghi_khachsan").where("IDKhachSan", id).del()
  },
  delKhuyenMaiIDKS(id) {
    return db("khuyenmai").where("IDKhachSan", id).del()
  },
  delHinhAnhIDKS(id) {
    return db("hinhanh_khachsan").where("IDKhachSan", id).del()
  },
  delThongIDKS(id) {
    return db("thongtinhuuich_ks").where("IDKhachSan", id).del()
  },

  //phong
  delTienNghiIDRoom(id) {
    return db("tiennghi_phong").where("IDPhong", id).del()
  },
  delHinhAnhIDPhong(id) {
    return db("hinhanh_phong").where("IDPhong", id).del()
  },
  delUuDaiIDPhong(id) {
    return db("uudai_phong").where("IDPhong", id).del()
  },
  delRoom(id) {
    return db("phong").where("ID", id).del()
  },
  delOrder(id) {
    return db("dondatphong").where("MaDatPhong", id).del()
  },
  updateTrangThai(id, trangthai) {
    return db("khachsan").where("ID", id).update({ TrangThai: trangthai })
  },

  async blockHotelByHotelierID(hotelierID, hotelierRight, hotelierState) {
    if (hotelierRight === 1 && hotelierState === 0) {
      return await db("khachsan")
        .where("IDChuKhachSan", hotelierID)
        .andWhere("TrangThai", 1)
        .update({ TrangThai: 2 })
    }
    return null
  },
  async unblockHotelByHotelierID(hotelierID, hotelierRight, hotelierState) {
    if (hotelierRight === 1 && hotelierState === 1) {
      console.log("ubblock")
      return await db("khachsan")
        .where("IDChuKhachSan", hotelierID)
        .andWhere("TrangThai", 2)
        .update({ TrangThai: 1 })
    }
    return null
  },

  updateTrangThaiByHotelier(id, trangthai) {
    return db("khachsan")
      .where("IDChuKhachSan", id)
      .update({ TrangThai: trangthai })
  },
}
