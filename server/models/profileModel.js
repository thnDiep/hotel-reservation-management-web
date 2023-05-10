import db from "../utils/db.js"

export default {
  async findByID(accountID) {
    const account = await db("nguoidung").where("ID", accountID)
    if (account.length === 0) return null
    return account[0]
    // .andWhere("TrangThai", 0);
  },

  //cập nhật thông tin người dùng
  async update(profileInfo) {
    return db("nguoidung").where("ID", profileInfo.ID).update(profileInfo)
  },

  // XXÓa người dùng
  del(id) {
    return db("nguoidung").where("ID", id).del()
  },

  // async getHotelInWishList(ID) {
  //   const hotels = await db("danhsachyeuthich").where("IDKhachHang", ID);
  //   if (hotels.length === 0) return null;

  //   const allHotels = {};
  //   hotels.forEach((hotel) => {
  //     const item = await db("khachsan").where("ID", hotel.IDKhachSan);
  //     allHotels.push(item);
  //   });

  //   return await db("khachsan").where(function () {
  //     this.whereIn("IDKhachSan", ids).whereNotNull("MaKhuyenMai");
  //   });
  //   // .andWhere("TrangThai", 0);
  // },
  //thêm ks vào danh sách yêu thích
  async addToWishList(data) {
    return db("danhsachyeuthich").insert(data)
  },

  //xóa khách sạn khỏi danh sách yêu thích
  async removeFromWishList(data) {
    return db("danhsachyeuthich")
      .where("IDKhachHang", data.IDKhachHang)
      .where("IDKhachSan", data.IDKhachSan)
      .del()
  },
}
