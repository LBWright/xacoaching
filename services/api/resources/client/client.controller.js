const Client = require('./client.model')

async function getMany(req, res, next) {
  try {
    const clients = await Client.find({}).populate('coach')
    return res.json({ clients })
  } catch (e) {
    next(e)
  }
}

async function createOne(req, res, next) {
  try {
    const client = new Client(req.body)
    await client.save()
    return res.json(201, { client })
  } catch (e) {
    next(e)
  }
}

async function getOne(req, res, next) {
  const { id } = req.params
  try {
    const client = await Client.findById(id)
    if (!client) {
      next({ statusCode: 404, message: 'Client not found' })
    }
    return res.json({ client })
  } catch (e) {
    next(e)
  }
}

async function updateOne(req, res, next) {
  const { id } = req.params
  try {
    const client = await Client.findByIdAndUpdate(id)
    return res.json(201, { client })
  } catch (e) {
    next(e)
  }
}

async function deleteOne(req, res, next) {
  const { id } = req.params
  try {
    const client = await Client.findByIdAndRemove(id)
    return res.json(201, { client })
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
