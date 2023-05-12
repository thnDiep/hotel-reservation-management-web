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
    // const facility = await db.raw(
    //   `SELECT tiennghichung_ks.ID, tiennghichung_ks.IDLoai, tiennghichung_ks.Icon, tiennghichung_ks.TenTienNghi FROM tiennghichung_ks WHERE tiennghichung_ks.IDLoai = ?`,
    //   id
    // );
    const facility = await db("tiennghichung_ks").where("IDLoai", id);
    return facility;
  },
  async getNameOfLoaiPhong(id) {
    const facility = await db("tiennghichung_phong").where("IDLoai", id);
    return facility;
  },

  async getFacilityOfHotel(id) {
    const fac = await db("tiennghi_khachsan").where("IDTienNghi", id);
    return fac;
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
  async updateTIenNghiKhachSan(tienNghi) {
    // console.log(tienNghi);
    // console.log(user.password);
    await db("tiennghi_khachsan")
      .where("IDKhachSan", tienNghi.IDKhachSan)
      .del();
    return await db("tiennghi_khachsan").insert(tienNghi);
  },
  async addTIenNghiPhong(tienNghi) {
    // console.log(user.password);
    return db("tiennghi_phong").insert(tienNghi);
  },
  async updateTIenNghiPhong(tienNghi) {
    // console.log(tienNghi);
    // console.log(user.password);
    await db("tiennghi_phong").where("IDPhong", tienNghi.IDPhong).del();
    // return db("tiennghi_phong")
    //   .where("IDPhong", tienNghi.IDPhong)
    //   .andWhere("IDTienNghi", tienNghi.IDTienNghi)
    //   .then((rows) => {
    //     if (rows.length > 0) {
    //       // Nếu tìm thấy bản ghi, thực hiện update
    //       return db("tiennghi_phong")
    //         .where("IDPhong", tienNghi.IDPhong)
    //         .andWhere("IDTienNghi", tienNghi.IDTienNghi)
    //         .update(tienNghi);
    //     } else {
    // Nếu không tìm thấy bản ghi, thực hiện insert
    return db("tiennghi_phong").insert(tienNghi);
    //   }
    // });
  },
  async addUuDaiPhong(uudai) {
    return db("uudai_phong").insert(uudai);
  },

  async updateUuDaiPhong(uudai) {
    // console.log(tienNghi);
    // console.log(user.password);
    await db("uudai_phong").where("IDPhong", uudai.IDPhong).del();

    // return db("uudai_phong")
    //   .where("IDPhong", uudai.IDPhong)
    //   .andWhere("IDUuDai", uudai.IDUuDai)
    //   .then((rows) => {
    //     if (rows.length > 0) {
    //       // Nếu tìm thấy bản ghi, thực hiện update
    //       return db("uudai_phong")
    //         .where("IDPhong", uudai.IDPhong)
    //         .andWhere("IDUuDai", uudai.IDUuDai)
    //         .update(uudai);
    //     } else {
    // Nếu không tìm thấy bản ghi, thực hiện insert
    return db("uudai_phong").insert(uudai);
    //   }
    // });
  },

  async addThongTinKhachSan(thongTin) {
    // console.log(user.password);
    return db("thongtinhuuich_ks").insert(thongTin);
  },
  async updateThongTinKhachSan(thongTin) {
    // console.log(user.password);
    await db("thongtinhuuich_ks")
      .where("IDKhachSan", thongTin.IDKhachSan)
      .del();
    // return db("thongtinhuuich_ks")
    //   .where("IDKhachSan", thongTin.IDKhachSan)
    //   .where("IDThongTin", thongTin.IDThongTin)
    //   .then((rows) => {
    //     if (rows.length > 0) {
    //       // Nếu tìm thấy bản ghi, thực hiện update
    //       return db("thongtinhuuich_ks")
    //         .where("IDKhachSan", thongTin.IDKhachSan)
    //         .where("IDThongTin", thongTin.IDThongTin)
    //         .update(thongTin);
    //     } else {
    // Nếu không tìm thấy bản ghi, thực hiện insert
    return db("thongtinhuuich_ks").insert(thongTin);
    //   }
    // });
    // console.log(user.password);
  },
  async getThongTinKhachSan(id) {
    // console.log(user.password);
    return db("thongtinhuuich_ks").where("IDKhachSan", id);
  },

  async getUuDaiphong(id) {
    // console.log(user.password);
    return db("uudai_phong").where("IDPhong", id);
  },

  async getTienIchKhachSan(id) {
    const IDTienNghi = await db("tiennghi_khachsan")
      .where("IDKhachSan", id)
      .orderByRaw("RAND()")
      .limit(5);
    // console.log("IDTienNghi");
    // console.log(IDTienNghi);
    return IDTienNghi;
  },
  async getTienIchPhong(id) {
    const IDTienNghi = await db("tiennghi_phong")
      .where("IDPhong", id)
      .orderByRaw("RAND()")
      .limit(5);
    // console.log("IDTienNghi");
    // console.log(IDTienNghi);
    return IDTienNghi;
  },
  async getTienNghiKhachSan(id) {
    const IDTienNghi = await db("tiennghi_khachsan").where("IDKhachSan", id);
    // console.log("IDTienNghi");
    // console.log(IDTienNghi);
    return IDTienNghi;
  },
  async getTienNghiPhong(id) {
    const IDTienNghi = await db("tiennghi_phong").where("IDPhong", id);
    // console.log("IDTienNghi");
    // console.log(IDTienNghi);
    return IDTienNghi;
  },
  async getTenTienNghi(id) {
    const [results] = await db("tiennghichung_ks").where("ID", id);

    return results;
  },
  async getTenTienNghiPhong(id) {
    const [results] = await db("tiennghichung_phong").where("ID", id);

    return results;
  },
};
