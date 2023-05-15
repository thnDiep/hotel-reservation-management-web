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

  // lấy điểm > 9 => tuyệt vời
  async getGreaterThan9(id) {
    return db.raw(
      `SELECT COUNT(ID) FROM danhgia WHERE danhgia.Diem > 9 and IDKhachSan=?`,
      id
    )
  },

  // lấy điểm >8 <= 9 => xuất sắc
  async getGreaterThan8(id) {
    return db.raw(
      `SELECT COUNT(ID) FROM danhgia WHERE danhgia.Diem <=9 and danhgia.Diem >8 and IDKhachSan=?`,
      id
    )
  },

  // lấy điểm >7 <= 8 => tốt
  async getGreaterThan7(id) {
    return db.raw(
      `SELECT COUNT(ID) FROM danhgia WHERE danhgia.Diem <=8 and danhgia.Diem >7 and IDKhachSan=?`,
      id
    )
  },

  // lấy điểm >6 <= 7 => trung bình
  async getGreaterThan6(id) {
    return db.raw(
      `SELECT COUNT(ID) FROM danhgia WHERE danhgia.Diem <=7 and danhgia.Diem >6 and IDKhachSan=?`,
      id
    )
  },

  // lấy điểm <=6> => kém
  async getLessThanOrEqualTo6(id) {
    return db.raw(
      `SELECT COUNT(ID) FROM danhgia WHERE danhgia.Diem <= 6 and IDKhachSan=?`,
      id
    )
  },

  async getFeedBackByHotelId(id) {
    const result = await db.raw(
      `SELECT * FROM danhgia, nguoidung WHERE danhgia.IDKhachHang = nguoidung.ID and danhgia.IDKhachSan = ? `,
      id
    )
    return result[0]
  },

  async findById(id) {
    const list = await db("danhgia").where("id", id)
    if (list.length === 0) return null

    return list[0]
  },

  async findByHotelID(id) {
    const list = await db("danhgia").where("IDKhachSan", id)
    if (list.length === 0) return null

    return list
  },

  async findByHotelierID(id) {
    const list = await db("danhgia").where("IDKhachHang", id)
    if (list.length === 0) return null

    return list
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

  // Thêm đánh giá
  async add(feedback) {
    const result = await db("danhgia").insert(feedback)
    return result[0]
  },
}
