const User = require("./../models/User")
const bcrypt = require("bcrypt")
const { connection } = require("./../config/mysql")

const handleNewUser = async (req, res) => {
  const { name, username, pwd, bio } = req.body;
  let duplicate = await User.findOne({username: username});
  if(duplicate){return res.status(409).json({"msg": "User already Exists"})}

  const dateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const query = `INSERT INTO user (username, name, reg_time) VALUES ('${username}', '${name}', '${dateTime}')`
  connection.query(query, function(err, res){
    if(err) console.log(err)
  })


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