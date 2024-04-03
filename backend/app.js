const express = require("express");
const connectDB = require('./db');
const mongoose = require("mongoose");
const postSchema = require("./postSchema")
const app = express();
app.use(express.json());
// express
const cors = require("cors");
app.use(cors({ origin: true }));
connectDB();

require("./postSchema");
const Images = mongoose.model("Image");

const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../src/images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/upload-image", upload.single("image"), async (req, res) => {
  console.log(req.body);
  const { title, description } = req.body;
  const imageName = req.file.filename;

  try {
    await Images.create({ title, description, image: imageName });
    res.json({ status: "ok" });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server Started");
});


app.get("/get-gallery", async (req, res) => {
    try {
      Images.find({}).then((data) => {
        res.send({ status: "ok", data: data });
      });
    } catch (error) {
      res.json({ status: error });
    }
  });