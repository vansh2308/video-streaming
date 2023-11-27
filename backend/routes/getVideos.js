const express = require("express")
const router = express.Router()
const videoController = require("./../controllers/videosController")

router.post("/", videoController.getAllVideos)
router.post("/updateVideo", videoController.updateVideoByID)
router.post("/id", videoController.getVideoByID)
router.post("/ids", videoController.getVideoByIds)
router.post("/logClick", videoController.logClick)
router.post("/uploadVideo", videoController.uploadVideo)
router.delete("/deleteVideo", videoController.deleteVideo)
module.exports = router

// 172.31.26.175