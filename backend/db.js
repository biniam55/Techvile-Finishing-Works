const mongoose = require("mongoose");
const mongoUrl = "mongodb+srv://biniamdegu44:7qfLKjEgQXCf1h80@cluster0.fmod1mb.mongodb.net/Techviletech?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.error("Connection to database failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

