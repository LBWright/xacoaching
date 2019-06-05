import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    SECRET_KEY = os.environ.get("SECRET_KEY") or "you shall not pass"
    DEBUG = True
    SQLALCHEMY_TRACK_MODIFICATIONS: False
    SQLALCHEMY_DATABASE_URL = os.environ.get(
        "DATABASE_URL"
    ) or "sqlite:///" + os.path.join(basedir, "app.db")

