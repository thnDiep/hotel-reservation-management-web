import express from "express"
import db from "./utils/db.js"
import bodyParser from "body-parser"
import cors from "cors"
import authRouter from "./routes/auth.js";
const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("api/auth", authRouter);
// check connect backend
app.get("/", async (req, res) => {
  res.json(await db("diadiem"))
})

app.post("/api/cks/voucher/insert", async (req, res) => {
  const khuyenmai = req.body.khuyenmai

  db("khuyenmai")
    .insert(khuyenmai)
    .then(() => {
      console.log(khuyenmai)
    })
})

app.listen(8800, () => {
  console.log(`Connected to backend!`)
})
