import db from "../utils/db.js"

export default {
  getAll() {
    return db("danhgia")
  },

  async getAvgRate(id) {
    const [[rate], ...h] = await db.raw(
      `SELECT AVG(Diem) as avgRate FROM danhgia WHERE danhgia.IDKhachSan = ?`,
      id
    )
    return rate.avgRate
  },

  async getCount(id) {
    const [[rate], ...h] = await db.raw(
      `SELECT COUNT(ID) as count FROM danhgia WHERE danhgia.IDKhachSan = ?`,
      id
    )
    return rate.count
  },
}
