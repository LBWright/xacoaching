"""Coach Resource routing and CRUD logic"""
from flask import jsonify, request, abort
from marshmallow import ValidationError
from app.models.coach import Coach
from app.schemas.coach_schema import CoachSchema
from app.api import bp
from app import db

coaches_schema = CoachSchema(many=True)
coach_schema = CoachSchema()


@bp.route("/coaches", methods=["GET"])
def get_many_coaches():
    """returns a list of coaches"""
    coaches = Coach.query.all()
    return coaches_schema.jsonify(coaches)


@bp.route("/coaches", methods=["POST"])
def create_coach():
    """creates a coach resource and returns the created resource"""
    try:
        request_json = request.get_json()
        new_coach = coach_schema.load(request_json)
    except ValidationError as err:
        abort(400, err)

    new_coach.save()
    coach_json = coach_schema.dump(new_coach)
    return jsonify(data=coach_json), 201


@bp.route("/coaches/<int:coach_id>")
def get_single_coach(coach_id):
    """returns a single coach by selected id"""
    coach = Coach.query.get(coach_id)
    if not coach:
        abort(404, "Coach not found")
    return coach_schema.jsonify(coach)


@bp.route("/coaches/<int:coach_id>", methods=["PUT"])
def update_coach(coach_id):
    """updates a coach. if coach not found, 404. Returns the updated resource"""
    coach = Coach.query.get(coach_id)
    if not coach:
        abort(404, "Coach not found")

    try:
        new_coach = coach_schema.load(request.get_json(), session=db.session)
    except ValidationError as err:
        abort(400, err.messages)

    coach.update(new_coach)

    return coach_schema.jsonify(new_coach)


@bp.route("/coaches/<int:coach_id>", methods=["DELETE"])
def delete_coach(coach_id):
    """deletes a single coach. If coach not found, 404. Returns the deleted resource"""
    coach = Coach.query.get(coach_id)
    if not coach:
        abort(404, "Coach not found")
    coach.delete()
    return coach_schema.jsonify(coach), 202
