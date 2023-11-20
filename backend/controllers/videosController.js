const Video = require("./../models/Video")


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


const getVideoByIDS = async (req, res) => {
  const idList  = req.body.ids;
  const vidList = await Video.find({"videoInfo.id": {$in: idList}})
  return res.status(200).json(vidList)
  
}

module.exports = { getAllVideos, updateVideoByID, getVideoByID, getVideoByIDS }