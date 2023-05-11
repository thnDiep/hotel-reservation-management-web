import db from "../utils/db.js";

export default {
  getAll() {
    return db("danhgia");
  },
  // điểm tb làm tròn 1 chữ số
  async getAvgScore() {
    return db.raw(`SELECT ROUND(AVG(CAST(Diem AS FLOAT)), 1) FROM danhgia`);
  },
  async findById(id) {
    const list = await db("danhgia").where("id", id);
    if (list.length === 0) return null;

    return list[0];
  },

  async add(feedback) {
    const result = await db("danhgia").insert(feedback);
    return result[0];
  },
};
