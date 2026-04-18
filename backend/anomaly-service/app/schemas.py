from pydantic import BaseModel
from typing import List

class EarningRecord(BaseModel):
    date: str
    gross_earned: float
    platform_deductions: float
    net_received: float

class AnomalyRequest(BaseModel):
    worker_id: int
    earnings: List[EarningRecord]