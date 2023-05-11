import db from "../utils/db.js";
export default {
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
};
