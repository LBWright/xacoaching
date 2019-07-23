const faker = require('faker')
const mongoose = require('mongoose')
const User = require('../resources/user/user.model')

const DB_URL = process.env.DB_URL
const DB_NAME = process.env.DB_NAME

async function connect() {
  const databaseString = `mongodb://${DB_URL}/${DB_NAME}`
  try {
    await mongoose.connect(databaseString, {
      useNewUrlParser: true
    })
    console.log('Mongo up and running')
  } catch (ex) {
    console.log(ex)
  }
}

async function seedUsers(rounds = 10) {
  const userPromise = []
  for (let i = 0; i < rounds; i++) {
    const userObj = {
      username: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.random.alphaNumeric(),
      campus: faker.lorem.word()
    }
    user = new User({ ...userObj })
    userPromise.push(user.save())
  }

  const created = await Promise.all(userPromise)
  console.log('---Users Created---')
  console.log(created)
}

connect()
seedUsers()

mongoose.disconnect()
