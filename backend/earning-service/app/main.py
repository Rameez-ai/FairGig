from fastapi import FastAPI
from .database import Base, engine
from .routes.earnings_routes import router

Base.metadata.create_all(bind=engine)

app = FastAPI(title="FairGig Earnings Service")

app.include_router(router, prefix="/earnings", tags=["Earnings"])

@app.get("/")
def home():
    return {"message": "Earnings Service Running"}