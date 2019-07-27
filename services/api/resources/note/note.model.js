const mongoose = require('mongoose')

const { Schema, model } = mongoose

const noteSchema = new Schema({
  text: {
    type: String
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: 'Client'
  },
  coach: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  session: {
    type: Schema.Types.ObjectId,
    ref: 'Session'
  }
})

const Note = model('Note', noteSchema)

module.exports = Note
