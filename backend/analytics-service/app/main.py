from fastapi import FastAPI
from .analytics import get_analytics

app = FastAPI(title="FairGig Analytics Service")

@app.get("/")
def home():
    return {"message": "Analytics Service Running"}

@app.get("/analytics")
def analytics():
    return get_analytics()