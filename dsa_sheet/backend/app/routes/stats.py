from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import Dict
from ..database import SessionLocal
from ..models import Problem as ProblemModel
from ..schemas import Stats

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/", response_model=Stats)
async def get_stats(db: Session = Depends(get_db)):
    problems = db.query(ProblemModel).all()
    
    total = len(problems)
    easy = len([p for p in problems if p.level == "Easy"])
    medium = len([p for p in problems if p.level == "Medium"])
    hard = len([p for p in problems if p.level == "Hard"])
    
    by_topic = {}
    for p in problems:
        by_topic[p.topic] = by_topic.get(p.topic, 0) + 1
    
    return Stats(
        total=total,
        easy=easy,
        medium=medium,
        hard=hard,
        by_topic=by_topic
    )