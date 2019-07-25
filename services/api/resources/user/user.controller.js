const crudControllers = require('../../util/base-controller')
const User = require('./user.model')

module.exports = crudControllers(User)
