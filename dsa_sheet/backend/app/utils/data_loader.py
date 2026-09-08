import json
import os
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Problem

def load_initial_data():
    db = SessionLocal()
    try:
        # Check if data already exists
        if db.query(Problem).count() > 0:
            print("✅ Data already loaded in database")
            return
        
        # Get the absolute path to the data file
        current_dir = os.path.dirname(os.path.dirname(os.path.dirname(__file__)))
        data_file = os.path.join(current_dir, 'data', 'problems.json')
        
        print(f"📂 Loading data from: {data_file}")
        
        # Check if file exists
        if not os.path.exists(data_file):
            print(f"❌ Data file not found at: {data_file}")
            return
        
        # Load JSON data
        with open(data_file, 'r', encoding='utf-8') as f:
            problems_data = json.load(f)
        
        if not problems_data:
            print("❌ No data found in JSON file")
            return
        
        # Insert data into database
        count = 0
        for p in problems_data:
            problem = Problem(
                num=p['num'],
                title=p['title'],
                topic=p['topic'],
                level=p['level'],
                completed=0
            )
            db.add(problem)
            count += 1
        
        db.commit()
        print(f"✅ Successfully loaded {count} problems into database")
        
    except json.JSONDecodeError as e:
        print(f"❌ Error decoding JSON: {e}")
        db.rollback()
    except Exception as e:
        print(f"❌ Error loading data: {e}")
        db.rollback()
    finally:
        db.close()