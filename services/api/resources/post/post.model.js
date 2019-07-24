const mongoose = require('mongoose')

const { Schema, model } = mongoose

const postSchema = new Schema({
  body: {
    type: String,
    required: [true, "Can't have a post without a body, now can we?"]
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ]
})

const Post = model('Post', postSchema)

module.exports = Post
