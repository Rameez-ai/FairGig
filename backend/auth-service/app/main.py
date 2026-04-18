from fastapi import FastAPI
from .database import Base, engine
from .routes.auth_routes import router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="FairGig Auth Service")

app.include_router(router, prefix="/auth", tags=["Auth"])

@app.get("/")
def home():
    return {"message": "Auth Service Running"}