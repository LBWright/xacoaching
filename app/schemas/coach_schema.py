"""Coach Marshmallow schema"""

from app.models.coach import Coach
from app import ma


class CoachSchema(ma.ModelSchema):
    class Meta:
        model = Coach
