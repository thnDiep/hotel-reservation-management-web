import express from "express";
import adminModel from "../models/adminModel.js";

const router = express.Router();

// Lấy dữ liệu tất cả tài khoản người dùng
router.get("/account", async (req, res, next) => {
  try {
    const allAccount = await adminModel.getAllAccount();
    res.json(allAccount);
  } catch (err) {
    next(err);
  }
});

// Thực hiện update thông tin người dùng
// router.post("/update", async (req, res, next) => {
//   try {
//     // const ID = req.query.ID || 4;
//     const info = req.body.info;
//     console.log(info);

//     await profileModel.update(info);

//     res.json({});
//   } catch (err) {
//     next(err);
//   }
// });

export default router;
