import express from "express";
import db from "./utils/db.js";
import bodyParser from "body-parser";
import cors from "cors";
import route from "./routes/index.js";
import activate_locals from "./middlewares/locals.mdw.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
activate_locals(app);
route(app);
app.listen(8800, () => {
  console.log(`Connected to backend!`);
});
