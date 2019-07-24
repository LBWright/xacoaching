const mongoose = require('mongoose')

const { Schema, model } = mongoose

const clientSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is a required field']
  },
  phone: {
    type: String
  },
  campus: {
    type: String
  },
  sessions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Session'
    }
  ],
  notes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Note'
    }
  ],
  appointments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Appointment'
    }
  ],
  coach: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Client = model('Client', clientSchema)

module.exports = Client
