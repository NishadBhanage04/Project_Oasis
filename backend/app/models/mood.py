from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from ..database import Base

class MoodLog(Base):
    __tablename__ = "mood_logs"

    id = Column(Integer, primary_key=True, index=True)
    mood = Column(String)
    stress_level = Column(Integer)
    factors = Column(String) # Stored as comma-separated values
    note = Column(Text, nullable=True)
    stress_category = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)
