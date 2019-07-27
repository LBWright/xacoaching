const axios = require('axios')

const HOST = process.env.HOST
const PORT = process.env.PORT
const URL = `http://${HOST}:${PORT}/clients`

describe('/clients integration - GET routes can be hit', () => {
  it('/clients, getMany', async done => {
    const res = await axios.get(URL)
    expect(res).toBeTruthy()
    done()
  })
  it('/clients/somethingRandom, getOne', async done => {
    const res = await axios.get(URL + '/somethingRandom')
    expect(res).toBeTruthy()
    done()
  })
})
