"""Coach DB Model Schema"""
from app import db


class Coach(db.Model):
    """Coach DB Model"""

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(80), nullable=False, unique=True)
    phone = db.Column(db.String(15))
    campus = db.Column(db.String(80))
    clients = db.relationship(
        "Client", backref="coach", lazy=True, cascade="save-update"
    )

    def __repr__(self):
        return f"<Coach {self.name}>"

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
