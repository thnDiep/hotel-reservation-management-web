import db from "../utils/db.js";

export default {
  async findByID(accountID) {
    const account = await db("nguoidung").where("ID", accountID);
    if (account.length === 0) return null;
    return account[0];
  },

  async getAllAccount() {
    const accounts = await db("nguoidung");
    if (accounts.length === 0) return null;
    return accounts;
  },
};
