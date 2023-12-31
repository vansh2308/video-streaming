const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    default: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, deserunt. Qui, eos voluptates. Similique nulla sunt qui temporibus eveniet dolorum facere accusamus, quis modi architecto neque incidunt, dignissimos quaerat beatae?"
  },
  password: {
    type: String,
    required: true
  },
  refreshToken: String,
  watchLater: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video"
  }],
  createdVideos: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video"
  }],
  likedVideos:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video"
  }],
  dislikedVideos:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video"
  }],
})




module.exports = mongoose.model('User', userSchema)