import db from "../utils/db.js";

export default {
  getAll() {
    return db("phong");
  },
  async add(phong) {
    // console.log(user.password);
    const result = await db("phong").insert(phong);
    console.log(result);
    return result[0];
  },
};
