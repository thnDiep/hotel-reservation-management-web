import db from "../utils/db.js"

export default {
  // Lấy tất cả địa điểm
  getAll() {
    return db("diadiem")
  },

  // Lấy địa điểm theo ID
  async findById(id) {
    const list = await db("diadiem").where("ID", id)
    if (list.length === 0) return null

    return list[0]
  },

  // Lấy địa điểm theo số giới hạn
  getLimit(limit) {
    return db("diadiem").limit(limit)
  },

  // Lấy ID địa điểm theo tên địa điểm
  async getIDDiaDiem(name) {
    const [ID] = await db.raw(`SELECT ID FROM diadiem WHERE 
      '${name}' LIKE CONCAT('%', TenDiaDiem, '%');`)
    return ID[0].ID
  },
}
