import db from "../utils/db.js";
export default {
  getAll() {
    return db("dondatphong");
  },
  async getAllInformation() {
    return await db.raw(
      `SELECT nguoidung.HoTen,nguoidung.HinhAnh, khachsan.Ten, phong.TenLoaiPhong, dondatphong.NgayNhanPhong, dondatphong.NgayTraPhong, nguoidung.SoDienThoai, dondatphong.TongTien, dondatphong.TrangThai, dondatphong.MaDatPhong
      FROM dondatphong
      INNER JOIN nguoidung ON dondatphong.IDKhachHang = nguoidung.ID
      INNER JOIN phong ON dondatphong.IDPhong = phong.ID
      INNER JOIN khachsan ON phong.IDKhachSan = khachsan.ID;`
    );
  },

  async findById(id) {
    const list = await db("dondatphong").where("MaDatPhong", id);
    if (list.length === 0) return null;
    return list[0];
  },
  async findByIdToCheckPhone(id) {
    let list = null;
    if (this.findById(id) !== null) {
      list = await db.raw(
        `SELECT nguoidung.SoDienThoai FROM dondatphong, nguoidung WHERE dondatphong.IDKhachHang = nguoidung.ID and dondatphong.MaDatPhong=?`,
        id
      );
    }

    return list[0];
  },
  // async findHotelierByOrder(idCks) {
  //   let list = null;
  //   if (this.findById(idCks) !== null) {
  //     list = await db.raw(
  //       `SELECT * FROM dondatphong, phong_dondatphong, phong, khachsan, nguoidung WHERE dondatphong.IDKhachHang=nguoidung.ID and dondatphong.MaDatPhong = phong_dondatphong.MaDonDatPhong and phong_dondatphong.IDPhong = phong.ID and phong.IDKhachSan = khachsan.ID and khachsan.IDChuKhachSan=?`,
  //       idCks
  //     );
  //   }

  //   return list[0];
  // },
  del(id) {
    return db("dondathang").where("MaDatPhong", id).del();
  },
  updateActive(order) {
    // console.log(user.isActive);
    return db("nguoidung").where("MaDatPhong", order.id).update({
      TrangThai: order.isActive,
    });
  },
};
