const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is a required field']
  },
  password: {
    type: String,
    required: [true, 'Password is a required field']
  },
  campus: {
    type: String
  },
  email: {
    type: String,
    required: [true, 'Email is a required field'],
    validate: {
      validator: function(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      },
      message: props => `${props.value} is not a valid email.`
    }
  },
  clients: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Client'
    }
  ],
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }
  ],
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
  ]
})

const User = mongoose.Model('User', UserSchema)

module.exports = User
