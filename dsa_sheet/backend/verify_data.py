import json
import os

def verify_json():
    current_dir = os.path.dirname(__file__)
    data_file = os.path.join(current_dir, 'data', 'problems.json')
    
    print(f"📂 Checking file: {data_file}")
    
    if not os.path.exists(data_file):
        print(f"File not found: {data_file}")
        return False
    
    try:
        with open(data_file, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        print(f"JSON is valid!")
        print(f"Total problems: {len(data)}")
        
        # Show first few problems
        print("\nFirst 5 problems:")
        for i, problem in enumerate(data[:5]):
            print(f"  {i+1}. {problem['num']}. {problem['title']} ({problem['topic']} - {problem['level']})")
        
        return True
    except json.JSONDecodeError as e:
        print(f"Invalid JSON: {e}")
        return False
    except Exception as e:
        print(f"Error: {e}")
        return False

if __name__ == "__main__":
    verify_json()