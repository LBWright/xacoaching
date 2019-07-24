const express = require('express')
const router = express.Router()
const users = require('./user/user.router')
const clients = require('./client/client.router')

router.use('/users', users)
router.use('/clients', clients)

module.exports = router
