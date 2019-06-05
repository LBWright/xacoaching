from flask import request
from flask_restful import Resource

coaches = [{"name": "Taylor Wright", "id": "1"}]


class Coach(Resource):
    def get(self, id):
        coach = next(filter(lambda x: x["id"] == id, coaches), None)

        return {"data": coach}, 200 if coach else 404

    def post(self, id):
        data = request.get_json()
        coach = next(filter(lambda x: x["name"] == data["name"], coaches), None)
        if coach:
            return (
                {"message": "A coach with name {} already exists".format(data["name"])},
                400,
            )

        coach = {"name": data["name"], "id": id}
        coaches.append(coach)

        return coaches, 201


class CoachList(Resource):
    def get(self):
        return {"data": coaches}

