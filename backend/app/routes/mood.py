from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Optional
from ..database import get_db
from ..models.mood import MoodLog
from ..services.stress_engine import assess_stress_level
from ..services.recommendations import get_recommendations

router = APIRouter()

class MoodCreate(BaseModel):
    mood: str
    stress_level: int
    factors: List[str]
    note: Optional[str] = None

class MoodResponse(BaseModel):
    message: str
    stress_category: str
    recommendations: List[str]

@router.post("/", response_model=MoodResponse)
def create_mood_log(entry: MoodCreate, db: Session = Depends(get_db)):
    # 1. Run Stress Pattern Assessment
    category = assess_stress_level(entry.mood, entry.stress_level, entry.factors)

    # 2. Generate Wellness Recommendations
    recs = get_recommendations(category, entry.mood, entry.factors)

    # 3. Save to SQLite
    db_entry = MoodLog(
        mood=entry.mood,
        stress_level=entry.stress_level,
        factors=",".join(entry.factors),
        note=entry.note,
        stress_category=category
    )
    db.add(db_entry)
    db.commit()
    db.refresh(db_entry)

    return {
        "message": "Check-in saved successfully",
        "stress_category": category,
        "recommendations": recs
    }

@router.get("/history")
def get_mood_history(db: Session = Depends(get_db)):
    logs = db.query(MoodLog).order_by(MoodLog.created_at.desc()).all()
    return logs
