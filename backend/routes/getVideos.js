const express = require("express")
const router = express.Router()
const videoController = require("./../controllers/videosController")

router.get("/", videoController.getAllVideos)
module.exports = router