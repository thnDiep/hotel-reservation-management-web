import uploadCloud from "../middlewares/uploader.js";
import facilityModel from "../models/facilityModel.js";
import hotelModel from "../models/hotelModel.js";
import orderModel from "../models/orderModel.js";
export const facility = async (req, res, next) => {
  try {
    const idCKS = req.query.idCKS || 1;
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

export const addHotel = async (req, res, next) => {
  try {
    console.log(req.body.hotel);
    const hotel = {
      ...req.body.hotel,
      Sao: parseInt(req.body.hotel.Sao),
      // GioDatPhong: req.body.hotel.GioDatPhong.value,
      // GioNhanPhong: req.body.hotel.GioNhanPhong.value
    };

    const ID = await hotelModel.getIDDiaDiem(hotel.DiaChi);
    console.log("ID");
    console.log(ID);
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
