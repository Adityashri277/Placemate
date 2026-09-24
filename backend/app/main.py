import os

import bcrypt
import psycopg
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr


# Load environment variables from backend/.env
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ENV_FILE = os.path.join(BASE_DIR, ".env")
load_dotenv(ENV_FILE)


app = FastAPI(
    title="Placemate API",
    description="Backend services for Placemate Platform",
    version="1.0.0"
)


# Enable CORS for Next.js frontend
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


# Database connection
DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise RuntimeError("DATABASE_URL environment variable is not set")


def get_connection():
    return psycopg.connect(DATABASE_URL)


# Request models
class RegisterRequest(BaseModel):
    full_name: str
    email: EmailStr
    password: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


# Root endpoint
@app.get("/")
def root():
    return {"message": "Placemate FastAPI Service is Live!"}


# Health check
@app.get("/api/v1/health")
def health_check():
    return {"status": "healthy"}


# Register
@app.post("/auth/register")
def register(payload: RegisterRequest):

    # Hash password using bcrypt
    password_hash = bcrypt.hashpw(
        payload.password.encode("utf-8"),
        bcrypt.gensalt()
    ).decode("utf-8")

    conn = None
    cur = None

    try:
        conn = get_connection()
        cur = conn.cursor()

        cur.execute(
            """
            INSERT INTO users (name, email, password_hash)
            VALUES (%s, %s, %s)
            RETURNING user_id, name, email
            """,
            (
                payload.full_name,
                payload.email,
                password_hash,
            )
        )

        user = cur.fetchone()

        conn.commit()

        return {
            "user": {
                "id": str(user[0]),
                "full_name": user[1],
                "email": user[2],
            }
        }

    except psycopg.errors.UniqueViolation:
        if conn:
            conn.rollback()

        raise HTTPException(
            status_code=409,
            detail="Email already registered"
        )

    finally:
        if cur:
            cur.close()
        if conn:
            conn.close()


# Login
@app.post("/auth/login")
def login(payload: LoginRequest):

    conn = None
    cur = None

    try:
        conn = get_connection()
        cur = conn.cursor()

        cur.execute(
            """
            SELECT user_id, name, email, password_hash
            FROM users
            WHERE email = %s
            """,
            (payload.email,)
        )

        user = cur.fetchone()

    finally:
        if cur:
            cur.close()
        if conn:
            conn.close()

    # User not found
    if not user:
        raise HTTPException(
            status_code=401,
            detail="Incorrect email or password"
        )

    # Verify password against stored bcrypt hash
    stored_hash = user[3].encode("utf-8")

    if not bcrypt.checkpw(
        payload.password.encode("utf-8"),
        stored_hash
    ):
        raise HTTPException(
            status_code=401,
            detail="Incorrect email or password"
        )

    return {
        "user": {
            "id": str(user[0]),
            "full_name": user[1],
            "email": user[2],
        }
    }