// const express = require('express');
// const router = express.Router();
// const mongoose = require("mongoose");
// const postSchema = require("./postSchema")

// require("./postSchema");
// const Images = mongoose.model("Image");

// const multer = require('multer')

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../src/images/");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });
// const upload = multer({ storage: storage });

// app.post("/upload-image", upload.single("image"), async (req, res) => {
//     console.log(req.body);
//     const { title, description } = req.body;
//     const imageName = req.file.filename;
  
//     try {
//       await Images.create({ title, description, image: imageName });
//       res.json({ status: "ok" });
//     } catch (error) {
//       res.status(500).json({ status: "error", message: error.message });
//     }
//   });


//   app.get("/get-gallery", async (req, res) => {
//     try {
//       Images.find({}).then((data) => {
//         res.send({ status: "ok", data: data });
//       });
//     } catch (error) {
//       res.json({ status: error });
//     }
//   });
//   module.exports = router;