const express = require('express')
const router = express.Router()
const users = require('./user/user.router')
const clients = require('./client/client.router')
const posts = require('./post/post.router')
const sessions = require('./session/session.router')
const notes = require('./note/note.router')

router.use('/users', users)
router.use('/clients', clients)
router.use('/posts', posts)
router.use('/sessions', sessions)
router.use('/notes', notes)

module.exports = router
