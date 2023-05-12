import authRouter from "./auth.js"
import promotionRouter from "./promotion.js"
import hotelierRouter from "./hotelier.js"
import profileRouter from "./profile.js"
import adminRouter from "./admin.js"
import hotelRouter from "./hotel.js"
import userRouter from "./user.js"
import homeRouter from "./home.js"
import placeRouter from "./place.js"

export default function route(app) {
  app.use("/auth", authRouter)
  app.use("/cks/promotion", promotionRouter)
  app.use("/cks", hotelierRouter)
  app.use("/profile", profileRouter)
  app.use("/admin", adminRouter)
  app.use("/user", userRouter)
  app.use("/hotel", hotelRouter)
  app.use("/place", placeRouter)
  app.use("/", homeRouter)
}
