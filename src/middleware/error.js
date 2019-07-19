export default errorHandler = function(err, req, res, next) {
  return res.json({ error: err }), 500
}
