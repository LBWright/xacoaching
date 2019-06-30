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
    return clients_schema.jsonify(clients)


@bp.route("/clients", methods=["POST"])
def create_client():
    client = client_schema.load(request.get_json())
    client.save()
    return client_schema.jsonify(client)


@bp.route("/clients/<int:client_id>", methods=["GET"])
def get_single_client(client_id):
    client = Client.query.get(client_id)

    if not client:
        return abort(404, "Client not found")

    return client_schema.jsonify(client)


@bp.route("/clients/<int:client_id>", methods=["PUT"])
def update_client(client_id):
    client = Client.query.get(client_id)
    if not client:
        return abort(404, "Client not found")

    new_client = client_schema.load(request.get_json())
    client.update(new_client)

    return client_schema.jsonify(new_client)


@bp.route("/clients/<int:client_id>", methods=["DELETE"])
def delete_client(client_id):
    client = Client.query.get(client_id)
    if not client:
        return abort(404, "Client not found")

    client.delete()

    return client_schema.jsonify(client), 202
