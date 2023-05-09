import authRouter from "./auth.js"
import promotionRouter from "./promotion.js"
import hotelModel from "../models/hotelModel.js"

export default function route(app) {
  app.use("/auth", authRouter)
  app.use("/cks/promotion", promotionRouter)
  //   app.use("/account", accountRoute);
  //   app.use("/courses", coursesRoute);
  //   app.use("/admin", adminRoute);
  //   app.use("/teacher", teacherRoute);
  app.get("/", async (req, res, next) => {
    try {
      const hotels = await hotelModel.getAll()

      res.json({ hotels })
    } catch (err) {
      next(err)
    }
  })
}
