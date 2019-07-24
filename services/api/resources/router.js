const express = require('express')
const router = express.Router()
const users = require('./user/user.router')
const clients = require('./client/client.router')
const posts = require('./post/post.router')

router.use('/users', users)
router.use('/clients', clients)
router.use('/posts', posts)

module.exports = router
