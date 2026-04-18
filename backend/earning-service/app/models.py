from sqlalchemy import Column, Integer, String, Float
from .database import Base

class Earning(Base):
    __tablename__ = "earnings"

    id = Column(Integer, primary_key=True, index=True)
    worker_id = Column(Integer, nullable=False)
    platform = Column(String, nullable=False)
    date = Column(String, nullable=False)
    hours_worked = Column(Float, nullable=False)
    gross_earned = Column(Float, nullable=False)
    platform_deductions = Column(Float, nullable=False)
    net_received = Column(Float, nullable=False)
    screenshot_path = Column(String, nullable=True)
    verification_status = Column(String, default="Pending")