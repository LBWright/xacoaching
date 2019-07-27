const crudControllers = require('../../util/base-controller')
const Note = require('./note.model')

module.exports = crudControllers(Note)
