class BaseController {
  constructor(model) {
    this.model = model
  }

  createOne = async (req, res, next) => {
    try {
      const doc = await this.model.create(req.body)
      res.status(201).json({ data: doc })
    } catch (e) {
      next(e)
    }
  }

  getOne = async (req, res, next) => {
    const { id } = req.params
    try {
      const doc = await this.model.findById(id)
      if (!doc) {
        const error = new Error('This item does not seem to exist')
        error.statusCode = 404
        throw error
      }
      res.status(200).json({ data: doc })
    } catch (e) {
      next(e)
    }
  }

  getMany = async (req, res, next) => {
    try {
      const docs = await this.model
        .find({})
        .select('-password')
        .exec()

      res.status(200).json({ data: docs })
    } catch (e) {
      next(e)
    }
  }

  updateOne = async (req, res, next) => {
    const { id } = req.params

    try {
      const updatedDoc = await this.model
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

  removeOne = async (req, res, next) => {
    const { id } = req.params
    try {
      const removed = await this.mongooseModel.findOneAndRemove({
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
}

module.exports = BaseController
