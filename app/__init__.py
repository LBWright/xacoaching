from flask import Flask
from flask_jwt_extended import JWTManager

from config import Config

app = Flask(__name__)
app.config.from_object(Config)
jwt = JWTManager(app)


@app.route("/")
def hello_world():
    return "hello, world!"


from app.api import bp as api_bp

app.register_blueprint(api_bp, url_prefix="/api")

if __name__ == "__main__":
    app.run()
