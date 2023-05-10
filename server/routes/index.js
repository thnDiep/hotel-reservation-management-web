import authRouter from "./auth.js"
import hotelierRouter from "./hotelier.js"

export default function route(app) {
  app.use("/auth", authRouter)
  app.use("/cks", hotelierRouter)
  //   app.use("/account", accountRoute);
  //   app.use("/courses", coursesRoute);
  //   app.use("/admin", adminRoute);
  //   app.use("/teacher", teacherRoute);
  //   app.use("/", studentRoute);
}
