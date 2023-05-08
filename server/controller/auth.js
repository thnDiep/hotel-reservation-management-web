import bcrypt from "bcryptjs";
import authModel from "../models/authModel.js";
export const signup = async (req, res, next) => {
    try {

        const rawPassword = req.body.MatKhau;
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(rawPassword, salt);
        const user = {
            ...req.body,
            MatKhau: hash,
            PhanQuyen: 0
        }
        console.log(user)
        const check = (name, check, i) => {
            if (name === check) {

                return 0;
            }
            return 1;
        };
        const userAvailable = await authModel.findByUsername(req.body.TenDangNhap);
        const emailAvailable = await authModel.findByEmail(req.body.Email);
        // Đem check tên đã đc tìm trong db vs tên user vừa req lên

        const checkName = check(userAvailable?.TenDangNhap, user.TenDangNhap, 0);
        const checkEmail = check(emailAvailable?.Email, user.Email, 1);
        if (checkName === 0) {
            return next(res.status(400).send("Tên đăng ký đã tồn tại"));

        }
        else if (checkEmail === 0) {
            return next(res.status(400).send("Email đã tồn tại"));
        }
        await authModel.add(user);
        res.status(200).send("User has been created.");
    } catch (err) {
        next(err);
    }
}
