import 'babel-polyfill'
import request from 'supertest'
import { app } from './server'

describe('Sanity Check: /ping', () => {
  it('should properly handle a GET request', async () => {
    const response = await request(app).get('/ping')
    expect(response.status).toBe(200)
    expect(response.body).toEqual({ msg: 'pong' })
  })
})
