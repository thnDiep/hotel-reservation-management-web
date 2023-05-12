import db from "../utils/db.js"

export default {
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

  // Thêm ks vào danh sách yêu thích
  async addToWishList(data) {
    return db("danhsachyeuthich").insert(data)
  },

  // xóa khách sạn khỏi danh sách yêu thích
  async removeFromWishList(data) {
    return db("danhsachyeuthich")
      .where("IDKhachHang", data.IDKhachHang)
      .where("IDKhachSan", data.IDKhachSan)
      .del()
  },

  // lấy danh sách khách sạn yêu thích  // data: userID
  async getWishList(ID) {
    const hotels = await db("danhsachyeuthich").where("IDKhachHang", ID)
    if (hotels.length === 0) return null

    const ids = []
    hotels.forEach((hotel) => {
      ids.push(hotel.IDKhachSan)
    })

    const result = await db("khachsan").whereIn("ID", ids)
    return result
  },

  async getWishList1(id) {
    return await db("danhsachyeuthich").where("IDKhachHang", id)
  },
}
