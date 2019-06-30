"""Client Model Declaration"""
from app import db


class Client(db.Model):
    """Client DB Model"""

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(80))
    phone = db.Column(db.String(15))
    campus = db.Column(db.String(80))
    coach_id = db.Column(db.Integer, db.ForeignKey("coach.id"))
    sessions = db.relationship("Session", backref="client", lazy=True)

    def __repr__(self):
        return f"<Client {self.name}>"

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
