const createOne = model => async (req, res, next) => {
  try {
    const doc = await model.create(req.body)
    res.status(201).json({ data: doc })
  } catch (e) {
    next(e)
  }
}

const getOne = model => async (req, res, next) => {
  const { id } = req.params
  try {
    const doc = await model.findById(id)
    if (!doc) {
      const error = new Error('This item does not seem to exist')
      error.statusCode = 404
      throw error
    }
    return res.status(200).json({ data: doc })
  } catch (e) {
    next(e)
  }
}

const getMany = model => async (req, res, next) => {
  try {
    const docs = await model
      .find({})
      .select('-password')
      .exec()

    return res.status(200).json({ data: docs })
  } catch (e) {
    next(e)
  }
}

const updateOne = model => async (req, res, next) => {
  const { id } = req.params

  try {
    const updatedDoc = await model
      .findOneAndUpdate(
        {
          _id: id
        },
        req.body,
        { new: true }
      )
      .lean()
      .exec()

    if (!updatedDoc) {
      throw new Error('Something went wrong updating this item')
    }

    res.status(200).json({ data: updatedDoc })
  } catch (e) {
    next(e)
  }
}

const removeOne = model => async (req, res, next) => {
  const { id } = req.params
  try {
    const removed = await model.findOneAndRemove({
      _id: id
    })

    if (!removed) {
      throw new Error('Something went wrong removing this item')
    }

    res.status(200).json({ data: removed })
  } catch (e) {
    console.error(e)
    next(e)
  }
}

module.exports = crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
