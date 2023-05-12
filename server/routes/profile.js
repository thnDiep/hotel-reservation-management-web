import express from "express";
import profileModel from "../models/profileModel.js";

const router = express.Router();

// Lấy dữ liệu thông tin người dùng
router.get("/", async (req, res, next) => {
  try {
    const ID = req.query.ID || 4;

    const profileInfo = await profileModel.findByID(ID);

    res.json(profileInfo);
  } catch (err) {
    next(err);
  }
});

// Thực hiện update thông tin người dùng
router.post("/update", async (req, res, next) => {
  try {
    // const ID = req.query.ID || 4;
    const info = req.body.info;

    await profileModel.update(info);

    res.json({});
  } catch (err) {
    next(err);
  }
});

// Xóa người dùng
router.get("/del", async (req, res, next) => {
  try {
    const idUser = req.query.idUser;

    if (idUser) {
      await profileModel.del(idUser);
    }

    res.json({ idUser });
  } catch (err) {
    next(err);
  }
});

//thêm khách sạn vào ds yêu thích
router.post("/addToWishList", async (req, res, next) => {
  try {
    const data = req.body.data;
    await profileModel.addToWishList(data);
    res.json({});
  } catch (err) {
    next(err);
  }
});

//xóa khách sạn khỏi ds yêu thích
router.post("/removeFromWishList", async (req, res, next) => {
  try {
    const data = req.body.data;
    await profileModel.removeFromWishList(data);
    res.json({});
  } catch (err) {
    next(err);
  }
});

router.get("/wishlist", async (req, res, next) => {
  try {
    const id = req.body.ID || 4;
    const wishlist = await profileModel.getWishList(id);
    res.json(wishlist);
  } catch (err) {
    next(err);
  }
});

export default router;
