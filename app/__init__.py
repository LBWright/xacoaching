from flask import Flask
from flask_restful import Api
from app.resources import Coach, CoachList

app = Flask(__name__)
api = Api(app)


@app.route("/")
def hello_world():
    return "hello, world!"


api.add_resource(Coach, "/coaches/<string:id>")
api.add_resource(CoachList, "/coaches")

if __name__ == "__main__":
    app.run()
