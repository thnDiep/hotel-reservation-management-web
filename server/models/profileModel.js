import db from "../utils/db.js";

export default {
  async findByID(accountID) {
    const account = await db("nguoidung").where("ID", accountID);
    if (account.length === 0) return null;
    return account[0];
    // return await db("khachsan").whereIn("ID", ids)
    // .andWhere("TrangThai", 0);
  },

  async update(profileInfo) {
    return db("nguoidung").where("ID", profileInfo.ID).update(profileInfo);
  },
};
