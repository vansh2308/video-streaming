const User = require("./../models/User")
const bcrypt = require("bcrypt")

const handleNewUser = async (req, res) => {
  const { name, username, pwd, bio } = req.body;
  let duplicate = await User.findOne({username: username});
  if(duplicate){return res.status(409).json({"msg": "User already Exists"})}

  try{
    let hashedPwd = await bcrypt.hash(pwd, 10);
    let newUser = {
      username: username,
      name: name,
      password: hashedPwd,
      bio: bio
    };
    await User.create(newUser);
    return res.status(201).send("user created");
  } catch(err){
    return res.status(500).json({ 'message': err.message });
  }
} 

module.exports =  { handleNewUser }