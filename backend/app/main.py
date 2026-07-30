from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Placemate API",
    description="Backend services for Placemate Platform",
    version="1.0.0"
)

# Enable CORS for Next.js Frontend (running on port 3000)
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Placemate FastAPI Service is Live!"}

@app.get("/api/v1/health")
def health_check():
    return {"status": "healthy"}