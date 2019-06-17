from flask import jsonify, request, abort
from marshmallow import ValidationError
from app.models.client import Client
from app.schemas.client_schema import ClientSchema
from app.api import bp
from app import db

clients_schema = ClientSchema(many=True)
client_schema = ClientSchema()


@bp.route("/clients", methods=["GET"])
def get_many_clients():
    clients = Client.query.all()
    return jsonify(data=clients_schema.dump(clients))


@bp.route("/clients", methods=["POST"])
def create_client():
    client = client_schema.load(request.get_json())
    client.save()
    return jsonify(data=client_schema.dump(client))


@bp.route("/clients/<int:id>", methods=["GET"])
def get_single_client():
    pass


@bp.route("/clients/<int:id>", methods=["PUT"])
def update_client():
    pass


@bp.route("/clients/<int:id>", methods=["DELETE"])
def delete_client():
    pass
