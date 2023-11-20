const User = require("./../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { connection } = require("./../config/mysql")
require("dotenv").config()



const handleLogin = async (req, res) => {
  const { username, pwd } = req.body

  if (!username || !pwd ) return res.status(400).json({ "msg": "Username & password are required" })
  const foundUser = await User.findOne({ username: username });
  if (!foundUser) return res.status(401).json({ "msg": "User not found!" })

  const match = await bcrypt.compare(pwd, foundUser.password)
  if(!match){return res.status(401).json({"msg": "Wrong credentials!"})}
  if (match) {
    const dateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const sql = `INSERT INTO logs(username, mode, time) VALUES('${username}', 'login', '${dateTime}')`
    connection.query(sql, function(err, res){
      if(err) console.log(err)
    })

    const accessToken = jwt.sign(
      { username: foundUser.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '30s' }
    )
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1d' }
    );

    const updatedUser = await User.findOneAndUpdate(
      {username: foundUser.username},
      {refreshToken: refreshToken},
      {returnOriginal: false}
    );

    res.cookie("jwt", refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
    return res.status(200).json({accessToken, user: foundUser})
  } else {
    return res.status(401).json({"msg": "suar"})
  }

}

module.exports = { handleLogin }