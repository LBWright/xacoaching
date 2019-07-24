const BaseController = require('../../util/base-controller')
const Client = require('./client.model')

class ClientController extends BaseController {
  constructor(model) {
    super(model)
    this.model = model
  }
}

const clientController = new ClientController(Client)

module.exports = clientController
