const express = require('express')
const mongoose = require('mongoose')
const router = require('./resources/router')

const app = express()

const PORT = process.env.PORT
const HOST = process.env.HOST
const DB_URL = process.env.DB_URL
const DB_NAME = process.env.DB_NAME

app.get('/ping', (req, res) => {
  return res.json({ message: 'pong!' })
})

app.use('/api', router)

app.use(function(err, req, res, next) {
  if (err) {
    return res.json({ message: err.message })
  }
  return res.json({ message: 'Uh oh. Not sure how this happened' })
})

const start = async () => {
  const databaseString = `mongodb://${DB_URL}/${DB_NAME}`
  try {
    await mongoose.connect(databaseString, {
      useNewUrlParser: true
    })
    console.log('Mongo up and running')
    app.listen(PORT, HOST, () => {
      console.log(`Listening on ${HOST}:${PORT}`)
    })
  } catch (ex) {
    console.log(ex)
  }
}

module.exports = { start, app }
