import express from "express";
import { order, comment, orderRoom } from "../controller/user.js";
const router = express.Router();

router.post("/checkOrder", order);
router.post("/order", orderRoom);
router.post("/giveFeedback", comment);

export default router;
