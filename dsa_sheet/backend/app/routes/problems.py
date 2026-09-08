from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import Optional, List
from ..database import SessionLocal
from ..models import Problem as ProblemModel
from ..schemas import Problem, ProblemCreate

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/", response_model=List[Problem])
async def get_problems(
    skip: int = Query(0, ge=0),
    limit: int = Query(100, ge=1, le=200),
    topic: Optional[str] = None,
    level: Optional[str] = None,
    search: Optional[str] = None,
    db: Session = Depends(get_db)
):
    query = db.query(ProblemModel)
    
    if topic:
        query = query.filter(ProblemModel.topic == topic)
    if level:
        query = query.filter(ProblemModel.level == level)
    if search:
        query = query.filter(ProblemModel.title.contains(search))
    
    return query.offset(skip).limit(limit).all()

@router.get("/{problem_id}", response_model=Problem)
async def get_problem(problem_id: int, db: Session = Depends(get_db)):
    problem = db.query(ProblemModel).filter(ProblemModel.id == problem_id).first()
    if not problem:
        raise HTTPException(status_code=404, detail="Problem not found")
    return problem

@router.post("/{problem_id}/toggle")
async def toggle_completed(problem_id: int, db: Session = Depends(get_db)):
    problem = db.query(ProblemModel).filter(ProblemModel.id == problem_id).first()
    if not problem:
        raise HTTPException(status_code=404, detail="Problem not found")
    
    problem.completed = 1 - problem.completed
    db.commit()
    db.refresh(problem)
    return {"status": "updated", "completed": problem.completed}