from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
import os

# Use absolute path for database
current_dir = os.path.dirname(os.path.dirname(__file__))
db_path = os.path.join(current_dir, 'leetcode.db')
SQLALCHEMY_DATABASE_URL = f"sqlite:///{db_path}"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, 
    connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def init_db():
    Base.metadata.create_all(bind=engine)
    print(f"✅ Database initialized at: {db_path}")