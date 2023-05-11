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
  async getThongTinHuuIch() {
    return db("thongtinhuuich");
  },
  async getUuDai() {
    return db("uudai");
  },
  async addTIenNghiKhachSan(tienNghi) {
    // console.log(user.password);
    return db("tiennghi_khachsan").insert(tienNghi);
  },
  async addTIenNghiPhong(tienNghi) {
    // console.log(user.password);
    return db("tiennghi_phong").insert(tienNghi);
  },
  async addUuDaiPhong(uudai) {
    return db("uudai_phong").insert(uudai);
  },
  async addThongTinKhachSan(thongTin) {
    // console.log(user.password);
    return db("thongtinhuuich_ks").insert(thongTin);
  },
  async getTienIchKhachSan(id) {
    const IDTienNghi = await db("tiennghi_khachsan")
      .where("IDKhachSan", id)
      .limit(5);
    // console.log("IDTienNghi");
    // console.log(IDTienNghi);
    return IDTienNghi;
  },
  async getTenTienNghi(id) {
    const [results] = await db("tiennghichung_ks")
      .orderByRaw("RAND()")
      .limit(5);

    return results;
  },
};
