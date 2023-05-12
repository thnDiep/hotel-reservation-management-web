import bcrypt from "bcryptjs"
import authModel from "../models/authModel.js"

export const signup = async (req, res, next) => {
  try {
    const rawPassword = req.body.MatKhau
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(rawPassword, salt)
    const user = {
      ...req.body,
      MatKhau: hash,
      PhanQuyen: 0 || 1,
    }
    const check = (name, check, i) => {
      if (name === check) {
        return 0
      }
      return 1
    }
    const emailAvailable = await authModel.findByEmail(req.body.Email)
    // Đem check tên đã đc tìm trong db vs tên user vừa req lên

    const checkEmail = check(emailAvailable?.Email, user.Email, 1)

    if (checkEmail === 0) {
      return next(res.status(400).send("Email đã tồn tại"))
    }
    await authModel.add(user)
    res.status(200).send("User has been created.")
  } catch (err) {
    next(err)
  }
}

export const login = async (req, res, next) => {
  try {
    const check = (name, chec) => {
      if (name === chec) {
        return 0
      } else {
        return 1
      }
    }
    const emailAvailable = await authModel.findByEmail(req.body.Email)
    if (check(emailAvailable?.Email, req.body.Email) == 1) {
      return next(res.status(400).send("Email và Password không đúng"))
    } else {
      if (check(emailAvailable?.Email, req.body.Email) == 0) {
        // Đúng email rồi so sánh password
        const [passAvailable] = await authModel.findByEmailToCheckPassword(
          req.body.Email
        )
        //console.log(passAvailable);
        const ret = bcrypt.compareSync(req.body.MatKhau, passAvailable.MatKhau)
        //console.log(ret);
        if (!ret) {
          return next(res.status(400).send("Email và Password không đúng"))
        }
        res.status(200).send("Đăng nhập thành công.")
        // if (ret) {
        //   //req.session.isAuthenticated = true;
        //   // Xét quyền của 3 vai trò
        //   if (emailAvailable.permissionID == 2) {
        //     req.session.isStudent = true;
        //     req.session.authUser = emailAvailable;
        //     return res.redirect("/");
        //   } else if (emailAvailable.permissionID == 3) {
        //     req.session.isTeacher = true;
        //     req.session.authTeacher = emailAvailable;
        //     return res.redirect("/teacher/profile");
        //   } else if (emailAvailable.permissionID == 1) {
        //     req.session.isAdmin = true;
        //     req.session.authAdmin = emailAvailable;
        //     return res.redirect("/admin/listAccount");
        //   }
        // } else {
        //   return res.render("login", {
        //     layout: false,
        //     email: req.body.email,

        //     err_message: "Email & password is not correct...",
        //   });
        // }
      }
    }
  } catch (err) {
    next(err)
  }
}
