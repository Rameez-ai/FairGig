from fastapi import FastAPI
from .schemas import AnomalyRequest
from .detector import detect_anomalies

app = FastAPI(title="FairGig Anomaly Service")

@app.get("/")
def home():
    return {"message": "Anomaly Service Running"}

@app.post("/detect")
def detect(data: AnomalyRequest):
    records = [item.dict() for item in data.earnings]
    anomalies = detect_anomalies(records)

    return {
        "worker_id": data.worker_id,
        "anomalies": anomalies,
        "total_flagged": len(anomalies)
    }