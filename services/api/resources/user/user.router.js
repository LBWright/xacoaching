const express = require('express')
const router = express.Router()

const {
  getOne,
  getMany,
  createOne,
  updateOne,
  deleteOne
} = require('./user.controller')

router.get('/', getMany)
router.post('/', createOne)
router.get('/:id', getOne)
router.put('/:id', updateOne)
router.delete('/:id', deleteOne)

module.exports = router
