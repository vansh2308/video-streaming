const Video = require("./../models/Video")
const { connection } = require("./../config/mysql")

const getAllVideos = async (req, res) => {
  const query = req.body.query
  let videos = await Video.find({})
  if(query != ""){
    videos = await Video.find({"videoInfo.snippet.title": {$regex: `${query}`, $options: 'i'}})
  }
  return res.status(200).json(videos.slice(0, 10))
}



const updateVideoByID = async (req, res) => {
  const id = req.body.id;
  const newVideo = req.body.newVideo
  await Video.replaceOne({'videoInfo.id': id}, newVideo)
  return res.status(200).json({"msg": "updated"})
}


const getVideoByID = async (req, res) => {
  const id = req.body.id;
  const vid = await Video.findOne({'videoInfo.id': id});
  return res.status(200).json(vid)
}


const logClick = async (req, res) => {
  const username = req.body.username;
  const vidID = req.body.id
  const dateTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
  const sql = `INSERT INTO clicks (username, video_id, time) VALUES ('${username}', '${vidID}', '${dateTime}')`
  connection.query(sql, function(err, res){
    if(err) console.log(err)
  })

  return res.status(200).json({"msg": "click logged!"})
}


const getVideoByIds = async (req, res)=> {
  const idList = req.body.ids;  
  const vidList = await Video.find({"_id": {$in: idList}})
  return res.status(200).json(vidList)
}


const uploadVideo = async (req, res) => {
  const newVideo = req.body.newVideo
  const newVid  = await Video.create(newVideo)
  console.log(newVid)


  return res.status(200).json({newVid: newVid})
}


const deleteVideo = async (req, res) => {
  console.log(req.body.id)
  return res.status(200).json({"msg": "video deleted!"})
}

module.exports = { getAllVideos, updateVideoByID, getVideoByID, getVideoByIds, logClick, uploadVideo, deleteVideo }