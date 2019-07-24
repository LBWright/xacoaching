const BaseController = require('../../util/base-controller')
const User = require('./user.model')

class UserController extends BaseController {
  constructor(model) {
    super(model)
    this.model = model
  }
}

const userController = new UserController(User)

module.exports = userController
