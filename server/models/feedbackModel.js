import db from "../utils/db.js"

export default {
  // Lấy tất cả đánh giá
  getAll() {
    return db("danhgia")
  },

  // điểm tb làm tròn 1 chữ số
  async getAvgScore(id) {
    return db.raw(
      `SELECT ROUND(AVG(CAST(Diem AS FLOAT)), 1) FROM danhgia WHERE IDKhachSan=?`,
      id
    )
  },
  async findById(id) {
    const list = await db("danhgia").where("id", id)
    if (list.length === 0) return null

    return list[0]
  },

  // Trung bình điểm lấy bởi id người dùng
  async getAvgRate(id) {
    const [[rate], ...h] = await db.raw(
      `SELECT AVG(Diem) as avgRate FROM danhgia WHERE danhgia.IDKhachSan = ?`,
      id
    )
    return rate.avgRate
  },

  // Đếm số đánh giá
  async getCount(id) {
    const [[rate], ...h] = await db.raw(
      `SELECT COUNT(ID) as count FROM danhgia WHERE danhgia.IDKhachSan = ?`,
      id
    )
    return rate.count
  },

  // Thêm đánh giá
  async add(feedback) {
    const result = await db("danhgia").insert(feedback)
    return result[0]
  },
}
