from app import ma
from app.models.post import Post


class PostSchema(ma.ModelSchema):
    class Meta:
        model = Post
