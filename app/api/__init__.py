from flask import Blueprint

bp = Blueprint("api", __name__)

import app.api.coaches

# we will register blueprints here
