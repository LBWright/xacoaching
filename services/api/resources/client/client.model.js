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
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Session'
    }
  ],
  notes: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Note'
    }
  ],
  appointments: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Appointment'
    }
  ],
  coach: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Coach'
  }
})
