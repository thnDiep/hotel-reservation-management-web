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

  async getNameOfLoaiKhachSan(id) {
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

  async getFacilityOfHotel(faciity, idks) {
    const [fac] = await db("tiennghi_khachsan")
      .where("IDTienNghi", faciity.ID)
      .andWhere("IDKhachSan", idks);
    if (fac !== undefined) {
      fac.TenTienNghi = faciity.TenTienNghi;
      fac.Icon = faciity.Icon;
    }
    return fac;
  },
  async getFacilityOfRoom(faciity, idPhong) {
    const [fac] = await db("tiennghi_phong")
      .where("IDTienNghi", faciity.ID)
      .andWhere("IDPhong", idPhong);
    if (fac !== undefined) {
      fac.TenTienNghi = faciity.TenTienNghi;
      fac.Icon = faciity.Icon;
    }
    return fac;
  },

  async getThongTinHuuIch() {
    return db("thongtinhuuich");
  },
  async getThongTinHuuIcKhachSan(idKs, IDTT) {
    const [[NoiDung]] = await db.raw(
      `SELECT NoiDung FROM thongtinhuuich_ks WHERE IDKhachSan=${idKs} AND IDThongTin=${IDTT.ID};`
    );
    console.log(NoiDung);
    if (NoiDung !== undefined) {
      if (IDTT.ThongTin.includes("Khoảng cách")) return NoiDung.NoiDung + " km";
      else return NoiDung.NoiDung;
    } else return "--:--";
  },
  async getUuDai() {
    return db("uudai");
  },
  async addTIenNghiKhachSan(tienNghi) {
    // console.log(user.password);
    return db("tiennghi_khachsan").insert(tienNghi);
  },
  async delTienNghiKs(id) {
    await db("tiennghi_khachsan").where("IDKhachSan", id).del();
  },
  async updateTIenNghiKhachSan(tienNghi) {
    // console.log(tienNghi);
    // console.log(user.password);

    return await db("tiennghi_khachsan").insert(tienNghi);
  },
  async addTIenNghiPhong(tienNghi) {
    // console.log(user.password);
    return db("tiennghi_phong").insert(tienNghi);
  },
  async delTIenNghiPhong(tienNghi) {
    // console.log(tienNghi);
    // console.log(user.password);
    return await db("tiennghi_phong").where("IDPhong", tienNghi).del();

    //   }
    // });
  },
  async addUuDaiPhong(uudai) {
    return db("uudai_phong").insert(uudai);
  },

  async delUuDaiPhong(uudai) {
    // console.log(tienNghi);
    // console.log(user.password);
    return await db("uudai_phong").where("IDPhong", uudai).del();
  },

  async addThongTinKhachSan(thongTin) {
    // console.log(user.password);
    return db("thongtinhuuich_ks").insert(thongTin);
  },
  async delThongTinKhachSan(thongTin) {
    // console.log(user.password);
    return await db("thongtinhuuich_ks").where("IDKhachSan", thongTin).del();

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
