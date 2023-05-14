import db from "../utils/db.js";

export default {
  // Lấy tất cả người dùng
  getAll() {
    return db("nguoidung");
  },

  // Lấy người dùng theo ID
  async findById(id) {
    const list = await db("nguoidung").where("ID", id);
    if (list.length === 0) return null;

    return list[0];
  },

  // Lấy người dùng theo tên
  async findByUsername(name) {
    const list = await db("nguoidung").where("TenDangNhap", name);
    if (list.length === 0) return null;

    return list[0];
  },

  // Lấy người dùng theo email
  async findByEmail(email) {
    const list = await db("nguoidung").where("Email", email);
    if (list.length === 0) return null;

    return list[0];
  },

  // Lấy mật khẩu người dùng theo email
  async findByEmailToCheckPassword(email) {
    let list = null;
    if (this.findByEmail(email) !== null) {
      list = await db.raw(
        `SELECT MatKhau FROM nguoidung WHERE Email = ?`,
        email
      );
    }
    return list[0];
  },

  // Lấy chi tiết người dùng theo email
  async findByEmailToGetDetail(email) {
    let list = null;
    if (this.findByEmail(email) !== null) {
      list = await db.raw(`SELECT * FROM nguoidung WHERE Email = ?`, email);
    }

    return list[0];
  },

  // Thêm người dùng
  add(user) {
    return db("nguoidung").insert(user);
  },

  // Thêm người dùng
  addNguoiNhanPhong(user) {
    return db("nguoinhanphong").insert(user);
  },

  // XÓa người dùng
  del(id) {
    return db("nguoidung").where("ID", id).del();
  },

  //cập nhật thông tin người dùng
  update(profileInfo) {
    return db("nguoidung").where("ID", profileInfo.ID).update(profileInfo);
  },

  // Cập nhật trạng thái người dùng
  // updateActive(user) {
  //   return db("nguoidung").where("id", user.id).update({
  //     isActive: user.isActive,
  //   })
  // },
};
