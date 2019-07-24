const jsonHandler = (req, res, next) => {
  if (req.headers['content-type'] !== 'application/json') {
    console.log(req.headers)
    next({
      statusCode: 400,
      message: `Cannot process request of 'content-type: ${
        req.headers.contentType
      }'`
    })
  }
  next()
}
