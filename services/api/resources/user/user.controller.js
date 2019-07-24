const User = require('./user.model')

async function getMany(req, res, next) {
  try {
    const users = await User.find({})
    return res.json({ users })
  } catch (e) {
    next(e)
  }
}

async function createOne(req, res, next) {
  try {
    const user = new User(req.body)
    const newUser = await user.save().populate()
    return res.json(201, { user: newUser })
  } catch (e) {
    next(e)
  }
}

async function getOne(req, res, next) {
  const { id } = req.params
  try {
    const user = await User.findById(id)
    if (!user) {
      next({ statusCode: 404, message: 'User not found' })
    }
    return res.json({ user })
  } catch (e) {
    next(e)
  }
}

async function updateOne(req, res, next) {
  const { id } = req.params
  try {
    const user = await User.findByIdAndUpdate(id)
    return res.json(201, { user })
  } catch (e) {
    next(e)
  }
}

async function deleteOne(req, res, next) {
  const { id } = req.params
  try {
    const user = await User.findByIdAndRemove(id)
    return res.json(201, { user })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  getMany,
  getOne,
  createOne,
  updateOne,
  deleteOne
}
