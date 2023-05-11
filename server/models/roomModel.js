import db from "../utils/db.js";

export default {
  getAll(id) {
    return db("phong").where("IDKhachSan", id);
  },
  async add(phong) {
    // console.log(user.password);
    const result = await db("phong").insert(phong);
    console.log(result);
    return result[0];
  },
};
