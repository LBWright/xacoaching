from datetime import datetime
from app import db


class Session(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    notes = db.Column(db.Text)
    duration = db.Column(db.Integer)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    client_id = db.Column(db.Integer, db.ForeignKey("client.id"), nullable=False)

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
