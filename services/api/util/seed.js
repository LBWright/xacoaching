const faker = require('faker')
const mongoose = require('mongoose')
const User = require('../resources/user/user.model')
const Client = require('../resources/client/client.model')

const DB_URL = process.env.DB_URL
const DB_NAME = process.env.DB_NAME

async function connect() {
  const databaseString = `mongodb://${DB_URL}/${DB_NAME}`
  try {
    await mongoose.connect(databaseString, {
      useNewUrlParser: true
    })
    console.log('DATABASE IS GETTIN DUMPED!!')
    await mongoose.connection.db.dropDatabase()
    console.log('Database Dropped! No turning back now.')

    console.log('Mongo up and running')
  } catch (ex) {
    console.log(ex)
  }
}

async function seedUsers(rounds = 10) {
  for (let i = 0; i < rounds; i++) {
    const userObj = {
      username: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.random.alphaNumeric(),
      campus: faker.lorem.word()
    }
    user = new User(userObj)
    try {
      const newUser = await user.save()
      console.log('---User Created---')
      console.log(newUser)
      seedClients(5, newUser._id)
    } catch (e) {
      console.log(e)
    }
  }
}

async function seedClients(rounds = 5, userId) {
  for (let i = 0; i < rounds; i++) {
    const clientObj = {
      name: faker.name.findName(),
      phone: faker.phone.phoneNumber(),
      campus: faker.lorem.word(),
      coach: userId
    }
    client = new Client(clientObj)
    client.save().then(newClient => {
      console.log(`----Client Created for Coach ${userId}----`)
      console.log(newClient)
    })
  }
}

connect()
seedUsers()
