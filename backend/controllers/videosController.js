const Video = require("./../models/Video")


const getAllVideos = async (req, res) => {
  const query = req.body.query
  const videos = await Video.find({})

  if(query != ""){
    videos.filter((video) => {
      return video
    })
  }
  console.log(videos.length)
  return res.status(200).json(videos.slice(1, 11))
}


module.exports = { getAllVideos }