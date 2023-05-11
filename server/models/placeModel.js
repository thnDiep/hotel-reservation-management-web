import db from "../utils/db.js"

export default {
  getAll() {
    return db("diadiem")
  },

  async findById(id) {
    const list = await db("diadiem").where("ID", id)
    if (list.length === 0) return null

    return list[0]
  },

  getLimit(limit) {
    return db("diadiem").limit(limit)
  },
}
