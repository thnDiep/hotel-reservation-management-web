import db from "../utils/db.js";

export default {
  getAll() {
    return db("khachsan");
  },
  getHotelByID(id) {
    return db("khachsan").where("ID", id);
  },
  getHotelByIDCKS(id) {
    return db("khachsan").where("IDChuKhachSan", id);
  },

  async findById(id) {
    const list = await db("khachsan").where("ID", id);
  },

  async findById(id) {
    const list = await db("khachsan").where("ID", 8);
    if (list.length === 0) return null;

    return list[0];
  },

  async findByHotelierId(hotelierID) {
    const hotels = await db("chukhachsan_khachsan").where(
      "IDChuKhachSan",
      hotelierID
    );
    if (hotels.length === 0) return null;

    const ids = [];
    hotels.forEach((hotel) => {
      ids.push(hotel.IDKhachSan);
    });
    return await db("khachsan").whereIn("ID", ids);
    // const ids = []
    // hotels.forEach((hotel) => {
    //   ids.push(hotel.IDKhachSan)
    // })
    // return await db("khachsan").whereIn("ID", ids)
    // .andWhere("TrangThai", 0);
    return await db("khachsan").where("IDChuKhachSan", hotelierID);
  },

  async getPicByHotelId(id) {
    return await db("hinhanh_khachsan").where("IDKhachSan", id);
  },

  async getFeedBackByHotelId(id) {
    const result = await db.raw(
      `SELECT * FROM danhgia, nguoidung WHERE danhgia.IDKhachHang = nguoidung.ID and danhgia.IDKhachSan = ? `,
      id
    );
    return result[0];
  },
  async getAllImage() {
    return await db("HinhAnh_KhachSan");
  },

  async getImage(id) {
    return await db("HinhAnh_KhachSan").where("IDKhachSan", id);
  },

  addHinhAnhKhachSan(hinhanh) {
    return db("HinhAnh_KhachSan").insert(hinhanh);
  },

  async getHotelTrung(name) {
    return await db("khachsan").where("DiaChi", name);
  },

  async search(keyWord) {
    const result = await db.raw(
      `SELECT * FROM khachsan WHERE MATCH(Ten) AGAINST("${keyWord}") AND TrangThai = 1
      UNION
      SELECT * FROM khachsan WHERE MATCH(DiaChi) AGAINST("${keyWord}") AND TrangThai = 1`
    );
    return result[0];
  },

  async add(khachsan) {
    // console.log(user.password);
    const result = await db("khachsan").insert(khachsan);
    return result[0];
  },
  update(khachsan) {
    return db("khachsan").where("ID", khachsan.ID).update(khachsan);
  },

  update(khachsan) {
    return db("khachsan").where("ID", khachsan.ID).update(khachsan);
  },
  addHinhAnhKhachSan(hinhanh) {
    return db("hinhanh_khachsan").insert(hinhanh);
  },
  addGiuongPhong(giuong) {
    return db("giuong_phong").insert(giuong);
  },
  updateGiuongPhong(giuong) {
    return db("giuong_phong")
      .where("IDPhong", giuong.IDPhong)
      .andWhere("IDGiuong", giuong.IDGiuong)
      .update(giuong);
  },
  async getHotelTrung(name) {
    return await db("khachsan").where("DiaChi", name);
  },
  async getIDDiaDiem(name) {
    const [ID] = await db.raw(`SELECT ID FROM diadiem WHERE 
    '${name}' LIKE CONCAT('%', TenDiaDiem, '%');`);
    return ID[0].ID;
  },
  async getImage(id) {
    return await db("hinhanh_khachsan").where("IDKhachSan", id);
  },
  del(id) {
    return db("khachsan").where("ID", id).del();
  },
  delRoom(id) {
    return db("phong").where("ID", id).del();
  },
  delOrder(id) {
    return db("dondatphong").where("MaDatPhong", MaDatPhong).del();
  },
};
