const express = require('express')
const router = express.Router()

const {
  getOne,
  getMany,
  createOne,
  updateOne,
  removeOne
} = require('./session.controller')

router
  .route('/')
  .get(getMany)
  .post(createOne)

router
  .route('/:id')
  .get(getOne)
  .put(updateOne)
  .delete(removeOne)

module.exports = router
