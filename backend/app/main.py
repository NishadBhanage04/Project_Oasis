from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, Base
from .routes import mood

# Create database tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="OASIS API")

# CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(mood.router, prefix="/api/mood", tags=["Mood"])

@app.get("/")
def read_root():
    return {"message": "Welcome to OASIS Wellness API"}
