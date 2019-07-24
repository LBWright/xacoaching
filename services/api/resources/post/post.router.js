const { Router } = require('express')
const {
  getMany,
  getOne,
  updateOne,
  removeOne,
  createOne
} = require('./post.controller')
const router = Router()

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
