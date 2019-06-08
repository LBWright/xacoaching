"""App configuration module"""
import os

BASEDIR = os.path.abspath(os.path.dirname(__file__))


class Config:
    """App configuration base class"""

    SECRET_KEY = os.environ.get("SECRET_KEY") or "you shall not pass"
    DEBUG = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.environ.get(
        "DATABASE_URL"
    ) or "sqlite:///" + os.path.join(BASEDIR, "app.db")
