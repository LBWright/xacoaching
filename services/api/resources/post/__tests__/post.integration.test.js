const axios = require('axios')

const HOST = process.env.HOST
const PORT = process.env.PORT
const URL = `http://${HOST}:${PORT}/posts`

describe('/posts integration - GET routes can be hit', () => {
  it('/posts, getMany', async done => {
    const res = await axios.get(URL)
    expect(res).toBeTruthy()
    done()
  })
  it('/posts/somethingRandom, getOne', async done => {
    const res = await axios.get(URL + '/somethingRandom')
    expect(res).toBeTruthy()
    done()
  })
})
