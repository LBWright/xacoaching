const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const { Schema } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is a required field'],
    unique: true
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
    unique: true,
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

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next()
  }

  bcrypt.hash(this.password, 8, (err, hash) => {
    if (err) {
      return next(err)
    }

    this.password = hash
    next()
  })
})

userSchema.methods.checkPassword = function(password) {
  const passwordHash = this.password
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, passwordHash, (err, same) => {
      if (err) {
        return reject(err)
      }

      resolve(same)
    })
  })
}

const User = mongoose.model('User', userSchema)

module.exports = User
