const crudControllers = require('../../util/base-controller')
const Post = require('./post.model')

module.exports = crudControllers(Post)
