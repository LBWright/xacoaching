from flask import Blueprint

bp = Blueprint("api", __name__)

import app.api.coaches
import app.security.auth_api
