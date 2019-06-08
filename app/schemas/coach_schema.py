"""Coach Marshmallow schema"""

from marshmallow import Schema, fields, post_load
from app.models.coach import Coach


class CoachSchema(Schema):
    id = fields.Int()
    fullname = fields.Str()
    email = fields.Email(required=True)

    @post_load
    def make_coach(self, data):
        return Coach(**data)
