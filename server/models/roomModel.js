import db from "../utils/db.js"

export default {
  // Lấy tất cả phòng
  getAll() {
    return db("phong")
  },

  // Lấy phòng theo ID
  getRoomByID(id) {
    return db("phong").where("ID", id)
  },

  // Lấy phòng theo id khách sạn
  getAllByKhachSan(id) {
    return db("phong").where("IDKhachSan", id)
  },

  // Lấy hình ảnh phòng
  async getImage(id) {
    return await db("hinhanh_phong").where("IDPhong", id)
  },

  // Lấy giường của phòng
  async getGiuong(id, index) {
    return await db("giuong_phong")
      .where("IDPhong", id)
      .andWhere("IDGiuong", index)
  },

  // thêm phòng
  async add(phong) {
    const result = await db("phong").insert(phong)
    return result[0]
  },

  // Cập nhật phòng
  updateRoom(phong) {
    return db("phong").where("ID", phong.ID).update(phong)
  },

  // Xóa phòng
  delRoom(id) {
    return db("phong").where("ID", id).del()
  },
}
