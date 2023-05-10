import db from "../utils/db.js"

export default {
  getAll() {
    return db("tiennghichung_ks")
  },
  getLoaiTienNghi() {
    return db("loaitiennghikhachsan")
  },
  async getNameOfLoai(id) {
    const facility = await db("tiennghichung_ks").where(
      "IDLoai",
      id
    )
    return facility
  },
  getThongTinHuuIch() {
    return db("thongtinhuuich")
  },
  addTIenNghiKhachSan(tienNghi) {
    // console.log(user.password);
    return db("TienNghi_KhachSan").insert(tienNghi);
  },
  addThongTinKhachSan(thongTin) {
    // console.log(user.password);
    return db("ThongTinHuuIch_KS").insert(thongTin);
  },
}
