import bcrypt from "bcryptjs";
import orderModel from "../models/orderModel.js";
import feedbackModel from "../models/feedbackModel.js";
import authModel from "../models/authModel.js";
import roomModel from "../models/roomModel.js";

// kiểm tra đơn đặt phòng
export const order = async (req, res, next) => {
  try {
    const check = (name, check, i) => {
      if (name === check) {
        return 0;
      }
      return 1;
    };
    const codeAvailable = await orderModel.findById(req.body.MaDatPhong);
    if (check(codeAvailable?.MaDatPhong, req.body.MaDatPhong) == 1) {
      return next(res.status(400).send("Không tìm thấy đơn đặt phòng"));
    } else {
      const [phoneAvailable] = await orderModel.findByIdToCheckPhone(
        req.body.MaDatPhong
      );
      if (check(phoneAvailable?.SoDienThoai, req.body.SoDienThoai) == 1) {
        return next(res.status(400).send("Không tìm thấy đơn đặt phòng"));
      }
      res.status(200).send("Đã tìm thấy đơn đặt phòng.");
    }
  } catch (err) {
    next(err);
  }
};

// đánh giá và bình luận KS  <chưa thay đổi id người dùng, ks>
export const comment = async (req, res, next) => {
  try {
    console.log(req.body);
    const feedback = {
      ...req.body,
    };
    await feedbackModel.add(feedback);
    res.status(200).send("Đã thêm thành công");
  } catch (error) {
    console.log(error);
    // console.log("sai")
  }
};

export const orderRoom = async (req, res, next) => {
  try {
    console.log(req.body.nguoidung);
    const info = req.body.nguoidung;
    await authModel.update(info);
    console.log(req.body.nguoinhanphong);
    await roomModel.updateSoPhong(req.body.dondatphong.IDPhong);
    if (req.body.nguoinhanphong !== null)
      await authModel.addNguoiNhanPhong(req.body.nguoinhanphong);
    console.log(req.body.dondatphong);
    const x = await orderModel.add(req.body.dondatphong);
    console.log(x);
    res.status(200).send("Đơn hàng đã được tạo");
  } catch (error) {
    next(error);
  }
};
