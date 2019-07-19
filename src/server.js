import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import { connect } from './utils/db'
import config from './config'

export const app = express()

app.use(helmet())
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())

app.get('/ping', (req, res) => {
  return res.json({ msg: 'pong' }), 200
})

const PORT = process.env.PORT || config.port
const HOST = process.env.HOST || config.host

export const start = async () => {
  try {
    await connect()
    app.listen(PORT, HOST, () => {
      console.log(`Listening on ${HOST}:${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}
