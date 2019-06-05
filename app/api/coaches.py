from random import randint
from flask import jsonify, request
from app.api import bp

coaches = [{"name": "Taylor Wright", "id": "1"}]


@bp.route("/coaches", methods=["GET"])
def get_many_coaches():
    return jsonify(data=coaches)


@bp.route("/coaches", methods=["POST"])
def create_coach():
    data = request.get_json()
    new_coach = {"name": data["name"], "id": randint(1, 100)}

    coaches.append(new_coach)

    return jsonify(data=new_coach), 201


@bp.route("/coaches/<id>")
def get_single_coach(id):
    coach = next(filter(lambda x: x["id"] == id, coaches), None)
    if coach:
        return jsonify(data=coach)

    return jsonify(error="Resource not found"), 404


@bp.route("/coaches/<id>", methods=["PUT"])
def update_coach(id):
    pass


@bp.route("/coaches/<id>", methods=["DELETE"])
def delete_coach(id):
    pass
