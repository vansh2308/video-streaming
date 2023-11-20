const express = require("express")
const { route } = require("./register")
const router = express.Router()
const loginController = require("./../controllers/loginController")

router.post("/", loginController.handleLogin)
module.exports = router