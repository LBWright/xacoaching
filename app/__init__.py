from flask import Flask
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate


from config import Config

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)


@app.route("/")
def hello_world():
    return "hello, world!"


@app.before_first_request
def initialize_db():
    db.create_all()


from app.api import bp as api_bp
from app.errors import app as register_error_handlers

app.register_blueprint(api_bp, url_prefix="/api")

if __name__ == "__main__":
    app.run()
