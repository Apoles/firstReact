import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/post.js";

const PORT = process.env.PORT || 7000;
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  // res.send("coding did apoles");
  res.json({
    author: "UsersPortu",
    messege: "calısıyor",
  });
});

app.use("/posts", postRoutes);

const CONNTECTION_URL = process.env.CONNTECTION_URL;
mongoose
  .connect(CONNTECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("server çalısıyor");
    });
  })
  .catch((error) => {});
