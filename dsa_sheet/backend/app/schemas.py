from pydantic import BaseModel
from typing import Optional, Dict

class ProblemBase(BaseModel):
    num: int
    title: str
    topic: str
    level: str

class ProblemCreate(ProblemBase):
    pass

class Problem(ProblemBase):
    id: int
    completed: Optional[int] = 0
    
    class Config:
        from_attributes = True  # Changed from orm_mode to from_attributes

class Stats(BaseModel):
    total: int
    easy: int
    medium: int
    hard: int
    by_topic: Dict[str, int]