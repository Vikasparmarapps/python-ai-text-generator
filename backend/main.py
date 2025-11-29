from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.generate import router as generate_router

app = FastAPI(
    title="AI Content Generator (Gemini 1.5 Flash)",
    version="1.0"
)

# Add CORS middleware for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

app.include_router(generate_router)
