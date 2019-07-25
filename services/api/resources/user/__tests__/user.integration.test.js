const axios = require('axios')

const HOST = process.env.HOST
const PORT = process.env.PORT
const URL = `http://${HOST}:${PORT}/users`

describe('/users integration - GET routes can be hit', () => {
  it('/users, getMany', async done => {
    const res = await axios.get(URL)
    expect(res).toBeTruthy()
    done()
  })
  it('/users/somethingRandom, getOne', async done => {
    const res = await axios.get(URL + '/somethingRandom')
    expect(res).toBeTruthy()
    done()
  })
})
