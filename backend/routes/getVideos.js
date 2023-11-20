const express = require("express")
const router = express.Router()
const videoController = require("./../controllers/videosController")

router.post("/", videoController.getAllVideos)
router.post("/updateVideo", videoController.updateVideoByID)
router.post("/id", videoController.getVideoByID)
router.post("/ids", videoController.getVideoByIDS)
router.post("/logClick", videoController.logClick)
module.exports = router