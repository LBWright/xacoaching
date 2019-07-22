const request = require('supertest')
const { app } = require('../server')

describe('Server.JS Tests', () => {
  it('Should pong!', async done => {
    const response = await request(app).get('/ping')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ message: 'pong!' })
    done()
  })
})
