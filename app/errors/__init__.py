from flask import jsonify
from app import app


@app.errorhandler(404)
def not_found_handler(exception):
    error = str(exception)
    return jsonify(error=error), 404


@app.errorhandler(500)
def internal_server_handler(exception):
    return (jsonify(error="Oops! Something went wrong on our end."), 500)


@app.errorhandler(400)
def bad_request_handler(exception):
    error = str(exception)
    return jsonify(error=error), 400
