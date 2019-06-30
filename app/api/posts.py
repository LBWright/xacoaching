from flask import jsonify, request, abort
from marshmallow import ValidationError
from app import db
from app.api import bp
from app.models.post import Post
from app.schemas.post_schema import PostSchema

posts_schema = PostSchema(many=True)
post_schema = PostSchema()


@bp.route("/posts", methods=["GET"])
def get_many_posts():
    posts = Post.query.all()
    return posts_schema.jsonify(posts), 200


@bp.route("/posts", methods=["POST"])
def create_post():
    pass


@bp.route("/posts/<int:post_id>", methods=["GET"])
def get_single_post(post_id):
    pass


@bp.route("/posts/<int:post_id>", methods=["PUT"])
def update_post(post_id):
    pass


@bp.route("/posts/<int:post_id>", methods=["delete"])
def delete_post(post_id):
    pass
