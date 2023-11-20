const Video = require("./../models/Video")


const getAllVideos = async (req, res) => {
  const query = req.body.query
  const videos = await Video.find({})
  if(query != ""){
    videos.filter((video) => {
      return video
    })
  }
  return res.status(200).json(videos)
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

module.exports = { getAllVideos, updateVideoByID, getVideoByID }