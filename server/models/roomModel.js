import db from "../utils/db.js";

export default {
  getAll() {
    return db("phong");
  },
  getAllByKhachSan(id) {
    return db("phong").where("IDKhachSan", id);
  },
  getEndow(id) {
    return db.raw(
      `SELECT * FROM uudai_phong up, uudai u WHERE u.ID=up.IDUuDai AND up.IDPhong=?`,
      id
    );
  },
  getGiaMin(id) {
    return db("phong").where("IDKhachSan", id).min("Gia").as("Gia");
  },
  getGiaMax(id) {
    return db("phong")
      .select("TenLoaiPhong")
      .where("IDKhachSan", id)
      .orderBy("Gia", "desc")
      .limit(1)
      .first();
  },
  async add(phong) {
    // console.log(user.password);
    const result = await db("phong").insert(phong);
    console.log(result);
    return result[0];
  },
  updateRoom(phong) {
    return db("phong").where("ID", phong.ID).update(phong);
  },
  getRoomByID(id) {
    return db("phong").where("ID", id);
  },
  async getImage(id) {
    return await db("hinhanh_phong").where("IDPhong", id);
  },
  async getGiuong(id, index) {
    return await db("giuong_phong")
      .where("IDPhong", id)
      .andWhere("IDGiuong", index);
  },
};
