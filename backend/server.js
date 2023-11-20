const express = require("express")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require('cookie-parser');
const { connectDB } = require("./config/db")
const { connection } = require("./config/mysql")

connectDB()
connection.connect((err) => {
  if (err) {console.log(err.stack); return; }
  console.log(`MYSQL connected as id: ${connection.threadId}`)
})


app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.use("/login", require("./routes/login"))
app.use("/register", require("./routes/register"))
app.use("/videos", require("./routes/getVideos"))
app.use("/user", require("./routes/user"))
app.use("/logout", require("./routes/logout"))


mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

