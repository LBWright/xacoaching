from flask import Flask, render_template
from logging import FileHandler, WARNING
from flask_jwt_extended import JWTManager
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate


from config import Config

file_handler = FileHandler("errorlog.txt")
file_handler.setLevel(WARNING)

app = Flask(__name__)
app.logger.addHandler(file_handler)
app.config.from_object(Config)
db = SQLAlchemy(app)
ma = Marshmallow(app)
migrate = Migrate(app, db)
jwt = JWTManager(app)


@app.route("/")
def render_client():
    return render_template("index.html", token="Reactipy")


@app.route("/throw")
def force_error():
    return 1 / 0


@app.before_first_request
def initialize_db():
    db.create_all()


from app.api import bp as api_bp
from app.errors import app as register_error_handlers

app.register_blueprint(api_bp, url_prefix="/api")

if __name__ == "__main__":
    app.run()
