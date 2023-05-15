import db from "../utils/db.js";

export default {
  // Lấy tất cả đơn đặt phòng
  getAll() {
    return db("dondatphong");
  },
  async getRareInformationOfOrder(id) {
    return await db.raw(
      `SELECT nguoidung.HoTen,nguoidung.HinhAnh, khachsan.Ten, phong.TenLoaiPhong, dondatphong.NgayNhanPhong, dondatphong.NgayTraPhong, nguoidung.SoDienThoai, dondatphong.TongTien, dondatphong.TrangThai, dondatphong.MaDatPhong
      FROM dondatphong
      INNER JOIN nguoidung ON dondatphong.IDKhachHang = nguoidung.ID
      INNER JOIN phong ON dondatphong.IDPhong = phong.ID
      INNER JOIN khachsan ON phong.IDKhachSan = khachsan.ID and khachsan.IDChuKhachSan = ?`,
      id
    );
  },
  add(dondatphong) {
    return db("dondatphong").insert(dondatphong);
  },

  // Tìm đơn đặt phòng bằng id
  async findById(id) {
    const list = await db("dondatphong").where("MaDatPhong", id);
    if (list.length === 0) return null;
    return list[0];
  },

  // Tìm đơn đặt phòng
  async findByIdToCheckPhone(id) {
    let list = null;
    if (this.findById(id) !== null) {
      list = await db.raw(
        `SELECT nguoidung.SoDienThoai FROM dondatphong, nguoidung WHERE dondatphong.IDKhachHang = nguoidung.ID and dondatphong.MaDatPhong=?`,
        id
      );
    }

    return list[0];
  },

  // Xóa đơn đặt phòng
  del(id) {
    return db("dondatphong").where("MaDatPhong", id).del();
  },

  //lấy thông tin đơn đặt hàng,     ID: id khach hang
  async getOrder(ID) {
    //thông tin đơn đặt phòng
    const orderInfo = await db("dondatphong").where("IDKhachHang", ID);

    if (orderInfo.length === 0) return null;

    //lấy thông tin phòng
    const ids_Phong = [];
    orderInfo.forEach((item) => {
      ids_Phong.push(item.IDPhong);
    });
    const room = await db("phong").whereIn("ID", ids_Phong);

    //lấy thông tin khách sạn
    const ids_KhachSan = [];
    room.forEach((item) => {
      ids_KhachSan.push(item.IDKhachSan);
    });
    const hotelInfo = await db("khachsan").whereIn("ID", ids_KhachSan);
    //lấy hình ảnh khách sạn
    const hotelImage = await db("hinhanh_khachsan").whereIn(
      "IDKhachSan",
      ids_KhachSan
    );

    orderInfo.forEach((item) => {
      room.forEach((_room) => {
        hotelInfo.forEach((_hotel) => {
          if (item.IDPhong === _room.ID && _room.IDKhachSan == _hotel.ID) {
            item.TenKhachSan = _hotel.Ten;
            item.IDKhachSan = _hotel.ID;
          }
        });
      });
    });

    orderInfo.forEach((item) => {
      room.forEach((_room) => {
        hotelInfo.forEach((_hotel) => {
          hotelImage.forEach((_img) => {
            if (
              item.IDPhong === _room.ID &&
              _room.IDKhachSan == _hotel.ID &&
              _hotel.ID == _img.IDKhachSan
            ) {
              item.HinhAnhKhachSan = _img.HinhAnh;
            }
          });
        });
      });
    });

    //lấy thông tin phòng
    orderInfo.forEach((item) => {
      room.forEach((_room) => {
        if (item.IDPhong === _room.ID) {
          item.TenLoaiPhong = _room.TenLoaiPhong;
          item.SoNguoi = _room.SoNguoi;
          item.Gia = _room.Gia;
          item.IDPhong = _room.ID;
        }
      });
    });
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
    const hotelImage = await db("hinhanh_khachsan").where(
      "IDKhachSan",
      room[0].IDKhachSan
    );

    //lấy thông tin khuyến mãi
    orderInfo[0].GiamGiaKhuyenMai = 0;
    if (orderInfo[0].IDKhuyenMai === null) {
      orderInfo[0].IDKhuyenMai = 0;
    }
    const promotion = await db("khuyenmai").where(
      "ID",
      orderInfo[0].IDKhuyenMai
    );

    if (promotion[0]) {
      orderInfo[0].TenKhuyenMai = promotion[0].MaKhuyenMai;
      orderInfo[0].GiamGiaKhuyenMai =
        -(promotion[0].PhanTramKM / 100) * room[0].Gia;
    }

    //lấy thông tin flash sale
    orderInfo[0].GiamGiaFlashSale = 0;
    if (orderInfo[0].IDFlashSale === null) {
      orderInfo[0].IDFlashSale = 0;
    }
    const flashsale = await db("khuyenmai").where(
      "ID",
      orderInfo[0].IDFlashSale
    );

    if (flashsale[0]) {
      orderInfo[0].TieuDeFlashSale = flashsale[0].TieuDe;
      orderInfo[0].GiamGiaFlashSale =
        -(flashsale[0].PhanTramKM / 100) * room[0].Gia;
    }

    //lấy thông tin tài khoản thanh toán chủ khách sạn
    const payAccount = await db("taikhoanthanhtoan").where(
      "IDKhachHang",
      hotelInfo[0].IDChuKhachSan
    );

    //lấy thông tin người nhận phòng
    const checkInPerson = await db("nguoinhanphong").where(
      "IDKhachHang",
      orderInfo[0].IDKhachHang
    );

    orderInfo[0].TenKhachSan = hotelInfo[0].Ten;
    orderInfo[0].HinhAnhKhachSan = hotelImage[0].HinhAnh;
    orderInfo[0].DiaChi = hotelInfo[0].DiaChi;
    orderInfo[0].GioNhanPhong = hotelInfo[0].GioNhanPhong;
    orderInfo[0].GioTraPhong = hotelInfo[0].GioTraPhong;
    orderInfo[0].SoSao = hotelInfo[0].soSao;
    // orderInfo[0].GiamGia = hotelInfo[0].GiamGia;

    orderInfo[0].Gia = room[0].Gia * orderInfo[0].SoLuongPhong;
    orderInfo[0].PhuPhi = room[0].Gia * 0.02;
    orderInfo[0].ThueVaDichVuKhachSan = room[0].Gia * 0.05;
    orderInfo[0].GiamThem = -(hotelInfo[0].GiamGia / 100) * room[0].Gia;

    orderInfo[0].TongTien =
      orderInfo[0].Gia +
      orderInfo[0].PhuPhi +
      orderInfo[0].ThueVaDichVuKhachSan +
      orderInfo[0].GiamThem +
      orderInfo[0].GiamGiaKhuyenMai +
      orderInfo[0].GiamGiaFlashSale;

    orderInfo[0].TenLoaiPhong = room[0].TenLoaiPhong;
    orderInfo[0].SoNguoi = room[0].SoNguoi;

    orderInfo[0].SoGiuong = bed[0].SoLuongGiuong;
    orderInfo[0].TenLoaiGiuong = bedInfo[0].LoaiGiuong;

    orderInfo[0].TenKhachHang = user[0].HoTen;
    orderInfo[0].SoDienThoaiKhachHang = user[0].SoDienThoai;
    orderInfo[0].EmailKhachHang = user[0].Email;

    orderInfo[0].TenNganHang = payAccount[0].TenNganHang;
    orderInfo[0].SoTaiKhoan = payAccount[0].SoTaiKhoan;
    orderInfo[0].TenChuTaiKhoan = payAccount[0].HoTenTK;

    if (checkInPerson[0]) {
      orderInfo[0].TenNguoiNhanPhong = checkInPerson[0].HoTen;
    } else {
      orderInfo[0].TenNguoiNhanPhong = orderInfo[0].TenKhachHang;
    }

    return orderInfo;
  },
};
