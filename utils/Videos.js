const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  videoInfo: {
    snippet: {
      thumbnails: {
        default: {
          url: String,
          width: Number,
          height: Number
        },
        high: {
          url: String,
          width: Number,
          height: Number
        }, 
        medium: {
          url: String,
          width: Number,
          height: Number
        }, 
        maxres: {
          url: String,
          width: Number,
          height: Number
        },
        standard: {
          url: String,
          width: Number,
          height: Number
        }
      },
      tags: [String],
      channelId: String,
      publishedAt: String,
      liveBroadcastContent: String,
      channelTitle: String,
      title: String,
      categoryId: String,
      localized: {
        description: String,
        title: String
      },
      description: String
    },
    kind: String,
    statistics: {
      commentCount: Number,
      viewCount: Number,
      favoriteCount: Number,
      dislikeCount: Number,
      // check dt 
      likeCount: Number
    },
    etag: String,
    id: String
  }
})

module.exports = mongoose.model('Video', videoSchema)