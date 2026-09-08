from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import init_db
from .routes import problems, stats
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="LeetCode Tracker API")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize database and load data
@app.on_event("startup")
async def startup_event():
    try:
        logger.info("🚀 Starting up application...")
        init_db()
        logger.info("✅ Database initialized")
        
        # Load initial data
        from .utils.data_loader import load_initial_data
        load_initial_data()
        logger.info("✅ Data loading completed")
    except Exception as e:
        logger.error(f"❌ Startup error: {e}")
        # Don't raise the exception to allow the app to start even if data loading fails

# Routes
app.include_router(problems.router, prefix="/api/problems", tags=["problems"])
app.include_router(stats.router, prefix="/api/stats", tags=["stats"])

@app.get("/")
async def root():
    return {"message": "LeetCode Tracker API", "status": "running"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}