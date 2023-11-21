const User = require("./../models/User")

const updateUserByID = async (req, res) => {
  const username = req.body.username;
  const newUser = req.body.newUser;
  await User.replaceOne({"username": username}, newUser)
  console.log(res.status)


  return res.status(200).json({"msg": "user updated!"})
  
}

module.exports = { updateUserByID }