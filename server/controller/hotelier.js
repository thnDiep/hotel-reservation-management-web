import uploadCloud from "../middlewares/uploader.js";
import facilityModel from "../models/facilityModel.js";
import hotelModel from "../models/hotelModel.js";
import roomModel from "../models/roomModel.js";
import orderModel from "../models/orderModel.js";
export const facility = async (req, res, next) => {
  try {
    const types = await facilityModel.getLoaiTienNghi();
    for (let type of types) {
      const n = await facilityModel.getNameOfLoai(type.ID);
      type.TienNghi = n;
      // console.log(type)
    }
    const useFull = await facilityModel.getThongTinHuuIch();
    // console.log(types)
    res.json({ types, useFull });
  } catch (err) {
    next(err);
  }
};
export const facilityRoom = async (req, res, next) => {
  try {
    console.log("hêloo");
    const types = await facilityModel.getLoaiTienNghiRoom();
    for (let type of types) {
      const n = await facilityModel.getNameOfLoaiPhong(type.ID);
      type.TienNghi = n;
      // console.log(type)
    }
    const endow = await facilityModel.getUuDai();
    // console.log(types)
    res.json({ types, endow });
  } catch (err) {
    next(err);
  }
};
export const addHotel = async (req, res, next) => {
  try {
    const hotel = {
      ...req.body.hotel,
      soSao: parseInt(req.body.hotel.soSao),
      GioTraPhong: req.body.hotel.GioTraPhong.value,
      GioNhanPhong: req.body.hotel.GioNhanPhong.value,
    };

    const ID = await hotelModel.getIDDiaDiem(hotel.DiaChi);
    if (ID > 0) {
      hotel.IDDiaDiem = ID;
    }
    const [oldHotel] = await hotelModel.getHotelTrung(hotel.DiaChi);
    console.log(oldHotel);
    if (oldHotel === undefined) {
      const id = await hotelModel.add(hotel);
      for (const ID of req.body.tienNghi) {
        await facilityModel.addTIenNghiKhachSan({
          idTienNghi: ID,
          IDKhachSan: id,
        });
      }
      console.log(req.body.thongTin);
      for (const ID of req.body.thongTin) {
        console.log(ID);
        await facilityModel.addThongTinKhachSan({
          IDThongTin: ID.ID,
          IDKhachSan: id,
          NoiDung: ID.NoiDung,
        });
      }
      for (const HinhAnh of req.body.HinhAnh) {
        await hotelModel.addHinhAnhKhachSan({
          IDKhachSan: id,
          HinhAnh: HinhAnh,
        });
      }
      // console.log(req.body)
      res.status(200).send("hotel has been created.");
    }
  } catch (err) {
    next(err);
  }
};

export const addRoom = async (req, res, next) => {
  try {
    const room = {
      TenLoaiPhong: req.body.Room.Ten,
      IDKhachSan: req.body.Room.IDKhachSan,
      SoPhongTrong: req.body.Room.SoPhongTrong,
      SoNguoi: req.body.Room.SoNguoi,
      DienTich: req.body.Room.DienTich,
      Gia: req.body.Room.Gia,
    };

    const id = await roomModel.add(room);
    console.log(id);
    for (const ID of req.body.tienNghi) {
      await facilityModel.addTIenNghiPhong({
        IDTienNghi: ID,
        IDPhong: id,
      });
    }
    console.log(req.body.uuDai);
    for (const ID of req.body.uuDai) {
      console.log("dsdsdasdasdasda");
      console.log(ID);
      await facilityModel.addUuDaiPhong({
        IDPhong: id,
        IDUuDai: ID,
      });
    }
    if (req.body.Room.GiuongDon > 0) {
      await hotelModel.addGiuongPhong({
        IDPhong: id,
        IDGiuong: 1,
        SoLuongGiuong: req.body.Room.GiuongDon,
      });
    }
    if (req.body.Room.GiuongDoi > 0) {
      await hotelModel.addGiuongPhong({
        IDPhong: id,
        IDGiuong: 2,
        SoLuongGiuong: req.body.Room.GiuongDoi,
      });
    }
    const [oldHotel] = await hotelModel.getHotelTrung(hotel.DiaChi);
    if (oldHotel === undefined) {
      const id = await hotelModel.add(hotel);
      for (const ID of req.body.tienNghi) {
        await facilityModel.addTIenNghiKhachSan({
          idTienNghi: ID,
          IDKhachSan: id,
        });
      }
      for (const ID of req.body.thongTin) {
        await facilityModel.addThongTinKhachSan({
          idThongTin: ID.ThongTin,
          IDKhachSan: id,
          NoiDung: ID.NoiDung,
        });
      }
      for (const HinhAnh of req.body.HinhAnh) {
        await hotelModel.addHinhAnhKhachSan({
          IDKhachSan: id,
          HinhAnh: HinhAnh,
        });
      }
      // console.log(req.body)
      res.status(200).send("hotel has been created.");
    }
  } catch (err) {
    next(err);
  }
};

export const order = async (req, res, next) => {
  try {
    const idCKS = req.query.idCKS || 1;
    const orders = await orderModel.getAllInformation();
    res.json({ orders });
  } catch (err) {
    next(err);
  }
};
