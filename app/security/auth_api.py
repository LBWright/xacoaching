"""Security API Endpoints and logic"""

from flask import request, jsonify
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
from app.api import bp


@bp.route("/login", methods=["POST"])
def login():
    """login endpoint"""
    username = request.json.get("username", None)
    password = request.json.get("password", None)

    if not username:
        return jsonify(msg="Username is a required field"), 400
    if not password:
        return jsonify(msg="Password is a required field"), 400

    if username != "test" or password != "test":
        return jsonify(msg="Bad username or password"), 401

    access_token = create_access_token(identity=username)
    return jsonify(token=access_token), 200


@bp.route("/current_user", methods=["GET"])
@jwt_required
def protected():
    """retrieve the current jwt identity or current user"""
    current_user = get_jwt_identity()
    return jsonify(current_user=current_user), 200
