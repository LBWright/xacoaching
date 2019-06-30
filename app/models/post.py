from datetime import datetime
from app import db


class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text)
    created_at db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    author_id = db.Column(db.Integer, db.ForeignKey("coach.id"), nullable=False)
    comments = db.relationship("Comment", backref="post", lazy="join")

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def update(self, updated):
        updated.id = self.id
        db.session.merge(updated)
        db.session.commit()
