const express = require('express')
const mongoose = require('mongoose')

const app = express()

const PORT = process.env.PORT
const HOST = process.env.HOST
const DB_URL = process.env.DB_URL
const DB_NAME = process.env.DB_NAME

app.get('/', (req, res) => {
  return res.json({ message: 'Welcome to the User Routes' })
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
