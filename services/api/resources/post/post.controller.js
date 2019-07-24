const BaseController = require('../../util/base-controller')
const Post = require('./post.model')

class PostController extends BaseController {
  constructor(model) {
    super(model)
    this.model = model
  }
}

const postController = new PostController(Post)

module.exports = postController
