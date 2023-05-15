import db from "../utils/db.js"

export default {
  // Lấy tất cả người dùng
  getAll() {
    return db("nguoidung")
  },

  // Lấy người dùng theo ID
  async findById(id) {
    const list = await db("nguoidung").where("ID", id)
    if (list.length === 0) return null

    return list[0]
  },

  async getBank(id) {
    const list = await db("taikhoanthanhtoan").where("IDKhachHang", id)
    if (list.length === 0) return null

    return list[0]
  },

  // Lấy người dùng theo tên
  async findByUsername(name) {
    const list = await db("nguoidung").where("TenDangNhap", name)
    if (list.length === 0) return null

    return list[0]
  },

  // Lấy người dùng theo email
  async findByEmail(email) {
    const list = await db("nguoidung").where("Email", email)
    if (list.length === 0) return null

    return list[0]
  },

  // Lấy mật khẩu người dùng theo email
  async findByEmailToCheckPassword(email) {
    let list = null
    if (this.findByEmail(email) !== null) {
      list = await db.raw(
        `SELECT MatKhau FROM nguoidung WHERE Email = ?`,
        email
      )
    }
    return list[0]
  },

  // Lấy chi tiết người dùng theo email
  async findByEmailToGetDetail(email) {
    let list = null
    if (this.findByEmail(email) !== null) {
      list = await db.raw(`SELECT * FROM nguoidung WHERE Email = ?`, email)
    }

    return list[0]
  },

  // Thêm người dùng
  add(user) {
    return db("nguoidung").insert(user)
  },

  updateTrangThai(id, trangthai) {
    return db("nguoidung").where("ID", id).update({ TrangThai: trangthai })
  },

  // Thêm người dùng
  addNguoiNhanPhong(user) {
    return db("nguoinhanphong").insert(user)
  },

  // XÓa người dùng
  del(id) {
    return db("nguoidung").where("ID", id).del()
  },

  //cập nhật thông tin người dùng
  async update(profileInfo) {
    // const hotel = await db("khachsan").where("IDChuKhachSan", profileInfo.ID);
    // if (profileInfo.PhanQuyen === 1 && profileInfo.TrangThai === 0) {
    //   hotel.forEach((item) => {
    //     item.TrangThai = 2;
    //   });
    // }

    // if (profileInfo.PhanQuyen === 1) {
    //   hotel.forEach((item) => {
    //     db("khachsan").where("ID", item.ID).update(item);
    //   });
    // }

    // console.log(hotel);

    return db("nguoidung").where("ID", profileInfo.ID).update(profileInfo)
  },

  // Thêm tài khoản thanh toán
  addBank(bank) {
    return db("taikhoanthanhtoan").insert(bank)
  },

  // Cập nhật tài khoản thanh toán
  updateBank(bank) {
    return db("taikhoanthanhtoan").where("ID", bank.ID).update(bank)
  },

  // Cập nhật trạng thái người dùng
  // updateActive(user) {
  //   return db("nguoidung").where("id", user.id).update({
  //     isActive: user.isActive,
  //   })
  // },
}
