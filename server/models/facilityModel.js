import db from "../utils/db.js";

export default {
  getAll() {
    return db("tiennghichung_ks");
  },
  getLoaiTienNghi() {
    return db("loaitiennghikhachsan");
  },
  getLoaiTienNghiRoom() {
    return db("loaitiennghiphong");
  },
  async getNameOfLoai(id) {
    const facility = await db("tiennghichung_ks").where("IDLoai", id);
    return facility;
  },
  async getNameOfLoaiPhong(id) {
    const facility = await db("tiennghichung_phong").where("IDLoai", id);
    return facility;
  },
  getThongTinHuuIch() {
    return db("thongtinhuuich");
  },
  getUuDai() {
    return db("uudai");
  },
  addTIenNghiKhachSan(tienNghi) {
    // console.log(user.password);
    return db("tiennghi_khachsan").insert(tienNghi);
  },
  addTIenNghiPhong(tienNghi) {
    // console.log(user.password);
    return db("tiennghi_phong").insert(tienNghi);
  },
  addUuDaiPhong(uudai) {
    return db("uudai_phong").insert(uudai);
  },
  addThongTinKhachSan(thongTin) {
    // console.log(user.password);
    return db("thongtinhuuich_ks").insert(thongTin);
  },
};
