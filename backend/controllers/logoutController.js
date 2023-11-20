const { connection } = require("./../config/mysql")

const handleLogout = (req, res) => {
  const username = req.body.username
  const dateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const sql = `INSERT INTO logs(username, mode, time) VALUES('${username}', 'logout', '${dateTime}')`
  connection.query(sql, function(err, res){
    if(err) console.log(err)
  })

  return res.status(200).json({"msg": "logout successful"})
}

module.exports = {handleLogout}