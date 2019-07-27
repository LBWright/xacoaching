const mongoose = require('mongoose')
const { Schema, model } = mongoose

const sessionSchema = new Schema({
  notes: {
    type: Schema.Types.ObjectId,
    ref: 'Note'
  },
  date: {
    type: Schema.Types.Date,
    default: Date.now(),
    required: true
  },
  callLength: {
    type: Number,
    required: true
  },
  client: {
    type: Schema.Types.ObjectId,
    ref: 'Client'
  },
  coach: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Session = model('Session', sessionSchema)

module.exports = Session
