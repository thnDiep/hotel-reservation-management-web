import db from "../utils/db.js";

export default {
  async findByID(accountID) {
    const account = await db("nguoidung").where("ID", accountID);
    if (account.length === 0) return null;
    return account[0];
    // .andWhere("TrangThai", 0);
  },

  //cập nhật thông tin người dùng
  async update(profileInfo) {
    return db("nguoidung").where("ID", profileInfo.ID).update(profileInfo);
  },

  // XÓa người dùng
  del(id) {
    return db("nguoidung").where("ID", id).del();
  },

  //thêm ks vào danh sách yêu thích
  async addToWishList(data) {
    return db("danhsachyeuthich").insert(data);
  },

  //xóa khách sạn khỏi danh sách yêu thích
  async removeFromWishList(data) {
    return db("danhsachyeuthich")
      .where("IDKhachHang", data.IDKhachHang)
      .where("IDKhachSan", data.IDKhachSan)
      .del();
  },

  // lấy danh sách khách sạn yêu thích
  //data: userID
  async getWishList(ID) {
    const hotels = await db("danhsachyeuthich").where("IDKhachHang", ID);
    if (hotels.length === 0) return null;

    const ids = [];
    hotels.forEach((hotel) => {
      ids.push(hotel.IDKhachSan);
    });

    const result = await db("khachsan").whereIn("ID", ids);
    return result;
  },

  //lấy thông tin đơn đặt hàng
  async getOrder(ID) {
    //thông tin đơn đặt phòng
    const orderInfo = await db("dondatphong").where("IDKhachHang", ID);

    if (orderInfo.length === 0) return null;

    //lấy thông tin phòng
    const room = await db("phong").where("ID", orderInfo[0].IDPhong);

    //lấy thông tin khách sạn
    const hotelInfo = await db("khachsan").where("ID", room[0].IDKhachSan);

    orderInfo.forEach((item) => {
      item.TenKhachSan = hotelInfo[0].Ten;
    });

    orderInfo[0].TenKhachSan = hotelInfo[0].Ten;
    orderInfo[0].TenLoaiPhong = room[0].TenLoaiPhong;
    orderInfo[0].SoNguoi = room[0].SoNguoi;
    console.log(orderInfo);
    return orderInfo;
  },

  //lấy thông tin đơn đặt hàng
  async getOrder(ID) {
    //thông tin đơn đặt phòng
    const orderInfo = await db("dondatphong").where("IDKhachHang", ID);

    if (orderInfo.length === 0) return null;

    //lấy thông tin phòng
    const room = await db("phong").where("ID", orderInfo[0].IDPhong);

    //lấy thông tin khách sạn
    const hotelInfo = await db("khachsan").where("ID", room[0].IDKhachSan);

    orderInfo[0].TenKhachSan = hotelInfo[0].Ten;
    orderInfo[0].TenLoaiPhong = room[0].TenLoaiPhong;
    orderInfo[0].SoNguoi = room[0].SoNguoi;
    console.log(orderInfo);
    return orderInfo;
  },

  //lấy thông tin đơn đặt hàng
  async getOrderByOrderCode(MaDatPhong) {
    //thông tin đơn đặt phòng
    const orderInfo = await db("dondatphong").where("MaDatPhong", MaDatPhong);

    if (orderInfo.length === 0) return null;

    //thông tin khách hàng
    const user = await db("NguoiDung").where("ID", orderInfo[0].IDKhachHang);

    //lấy thông tin phòng
    const room = await db("phong").where("ID", orderInfo[0].IDPhong);

    //lấy thông tin giường
    const bed = await db("giuong_phong").where("IDPhong", room[0].ID);
    const bedInfo = await db("giuong").where("ID", bed[0].IDGiuong);

    //lấy thông tin khách sạn
    const hotelInfo = await db("khachsan").where("ID", room[0].IDKhachSan);

    orderInfo[0].TenKhachSan = hotelInfo[0].Ten;
    orderInfo[0].DiaChi = hotelInfo[0].DiaChi;

    orderInfo[0].TenLoaiPhong = room[0].TenLoaiPhong;
    orderInfo[0].SoNguoi = room[0].SoNguoi;
    orderInfo[0].Gia = room[0].Gia;

    orderInfo[0].SoGiuong = bed[0].SoLuongGiuong;
    orderInfo[0].TenLoaiGiuong = bedInfo[0].LoaiGiuong;

    orderInfo[0].TenKhachHang = user[0].HoTen;
    orderInfo[0].SoDienThoaiKhachHang = user[0].SoDienThoai;
    orderInfo[0].EmailKhachHang = user[0].Email;

    console.log(orderInfo);
    return orderInfo;
  },
};
