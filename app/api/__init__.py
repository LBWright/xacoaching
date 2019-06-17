from flask import Blueprint

bp = Blueprint("api", __name__)

import app.api.coaches
import app.api.clients
import app.security.auth_api
