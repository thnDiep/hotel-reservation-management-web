import express from "express";
import { order, comment } from "../controller/user.js";
const router = express.Router();

router.post("/checkOrder", order);
router.post("/giveFeedback", comment);

export default router;
