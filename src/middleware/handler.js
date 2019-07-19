async function asyncHandler(handler) {
  return (req, res, next) => {
    try {
      await handler(req, res)
    } catch (ex) {
      next(ex)
    }
  }
}
