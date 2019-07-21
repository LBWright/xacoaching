const {
  getOne,
  getMany,
  createOne,
  updateOne,
  deleteOne
} = require('../controller')

module.exports = function(app) {
  app.get('/', getMany)
  app.post('/', createOne)
  app.get('/:id', getOne)
  app.put('/:id', updateOne)
  app.delete('/:id', deleteOne)
}
