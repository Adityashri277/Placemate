from sqlalchemy import Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Problem(Base):
    __tablename__ = "problems"
    
    id = Column(Integer, primary_key=True, index=True)
    num = Column(Integer, unique=True, index=True)
    title = Column(String)
    topic = Column(String)
    level = Column(String)
    completed = Column(Integer, default=0)