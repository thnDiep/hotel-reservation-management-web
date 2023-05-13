import uploadCloud from "../middlewares/uploader.js";
import facilityModel from "../models/facilityModel.js";
import hotelModel from "../models/hotelModel.js";
import roomModel from "../models/roomModel.js";
import orderModel from "../models/orderModel.js";
import placeModel from "../models/placeModel.js";

export const facility = async (req, res, next) => {
  try {
    const types = await facilityModel.getLoaiTienNghi();
    for (let type of types) {
      const n = await facilityModel.getNameOfLoai(type.ID);
      type.TienNghi = n;
    }
    const useFull = await facilityModel.getThongTinHuuIch();
    res.json({ types, useFull });
  } catch (err) {
    next(err);
  }
};

export const facilityRoom = async (req, res, next) => {
  try {
    const types = await facilityModel.getLoaiTienNghiRoom();
    for (let type of types) {
      const n = await facilityModel.getNameOfLoaiPhong(type.ID);
      type.TienNghi = n;
    }
    const endow = await facilityModel.getUuDai();
    res.json({ types, endow });
  } catch (err) {
    next(err);
  }
};

// Thêm khách sạn
export const addHotel = async (req, res, next) => {
  try {
    const hotel = {
      ...req.body.hotel,
      soSao: parseInt(req.body.hotel.soSao),
      GioTraPhong: req.body.hotel.GioTraPhong.value,
      GioNhanPhong: req.body.hotel.GioNhanPhong.value,
    };

    const ID = await placeModel.getIDDiaDiem(hotel.DiaChi);
    if (ID > 0) {
      hotel.IDDiaDiem = ID;
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
      res.status(200).send("hotel has been created.");
    }
  } catch (err) {
    next(err);
  }
};

// Cập nhật khách sạn
export const updateHotel = async (req, res, next) => {
  console.log(req.body.tienNghi);
  try {
    const hotel = {
      ...req.body.hotel,
      soSao: parseInt(req.body.hotel.soSao),
      GioTraPhong: req.body.hotel.GioTraPhong.value,
      GioNhanPhong: req.body.hotel.GioNhanPhong.value,
    };

    const ID = await placeModel.getIDDiaDiem(hotel.DiaChi);
    if (ID > 0) {
      hotel.IDDiaDiem = ID;
    }
    const [oldHotel] = await hotelModel.getHotelTrung(hotel.DiaChi);
    const idKhachSan = req.query.idKhachSan || 5;

    if (oldHotel === undefined || oldHotel.DiaChi === hotel.DiaChi) {
      await hotelModel.update(hotel);
      await facilityModel.delTienNghiKs(hotel.ID);
      for (const ID of req.body.tienNghi) {
        await facilityModel.addTIenNghiKhachSan({
          IDTienNghi: ID,
          IDKhachSan: hotel.ID,
        });
      }
      // console.log("ádafsđs");
      await facilityModel.delThongTinKhachSan(hotel.ID);
      for (const ID of req.body.thongTin) {
        // console.log(ID);
        await facilityModel.addThongTinKhachSan({
          IDThongTin: ID.ID,
          IDKhachSan: hotel.ID,
          NoiDung: ID.NoiDung,
        });
      }
      // console.log("ádafsđs");
      for (const HinhAnh of req.body.HinhAnh) {
        await hotelModel.addHinhAnhKhachSan({
          IDKhachSan: hotel.ID,
          HinhAnh: HinhAnh,
        });
      }
      res.status(200).send("hotel has been inserted.");
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
    console.log(req.body.tienNghi);
    for (const ID of req.body.tienNghi) {
      await facilityModel.addTIenNghiPhong({
        IDTienNghi: ID,
        IDPhong: id,
      });
    }
    for (const ID of req.body.uuDai) {
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

    res.status(200).send("hotel has been created.");
  } catch (err) {
    next(err);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const room = {
      ID: req.body.room.ID,
      TenLoaiPhong: req.body.Room.Ten,
      IDKhachSan: req.body.Room.IDKhachSan,
      SoPhongTrong: req.body.Room.SoPhongTrong,
      SoNguoi: req.body.Room.SoNguoi,
      DienTich: req.body.Room.DienTich,
      Gia: req.body.Room.Gia,
    };

    await roomModel.updateRoom(room);
    console.log(req.body.tienNghi);
    await delTIenNghiPhong(room.ID);
    for (const ID of req.body.tienNghi) {
      await facilityModel.addTIenNghiPhong({
        IDTienNghi: ID,
        IDPhong: room.ID,
      });
    }
    await facilityModel.delUuDaiPhong(room.ID);
    for (const ID of req.body.uuDai) {
      await facilityModel.addUuDaiPhong({
        IDPhong: room.ID,
        IDUuDai: ID,
      });
    }
    if (req.body.Room.GiuongDon > 0) {
      await hotelModel.updateGiuongPhong({
        IDPhong: room.ID,
        IDGiuong: 1,
        SoLuongGiuong: req.body.Room.GiuongDon,
      });
    }
    if (req.body.Room.GiuongDoi > 0) {
      await hotelModel.updateGiuongPhong({
        IDPhong: room.ID,
        IDGiuong: 2,
        SoLuongGiuong: req.body.Room.GiuongDoi,
      });
    }

    res.status(200).send("hotel has been created.");
  } catch (err) {
    next(err);
  }
};

export const order = async (req, res, next) => {
  try {
    const idCKS = req.query.idCKS || 1;
    const orders = await orderModel.getRareInformationOfOrder(idCKS);
    if (orders.length === 0) return null;
    res.json({ orders });
  } catch (err) {
    next(err);
  }
};
