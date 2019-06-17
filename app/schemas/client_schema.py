"""Client Marshmallow schema"""

from app.models.client import Client
from app import ma


class ClientSchema(ma.ModelSchema):
    class Meta:
        model = Client
