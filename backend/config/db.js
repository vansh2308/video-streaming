const mongoose = require("mongoose")
const connectDB = async () => {
  try {
      await mongoose.connect("mongodb://localhost:27017/video-streaming-db");
  } catch (err) {
      console.error(err);
  }
}

module.exports = {connectDB}
