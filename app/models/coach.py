"""Coach DB Model Schema"""
from app import db


class Coach(db.Model):
    """Coach DB Model"""

    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(80), nullable=False, unique=True)

    def __repr__(self):
        return f"<Coach {self.fullname}>"

    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def update(self, new_coach):
        new_coach.id = self.id
        db.session.merge(new_coach)
        db.session.commit()
