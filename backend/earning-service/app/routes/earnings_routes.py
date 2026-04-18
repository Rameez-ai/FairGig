from fastapi import APIRouter, Depends, UploadFile, File, HTTPException
from sqlalchemy.orm import Session
from ..database import SessionLocal
from ..models import Earning
from ..schemas import EarningCreate
import os
import shutil

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def create_earning(data: EarningCreate, db: Session = Depends(get_db)):
    earning = Earning(**data.dict())
    db.add(earning)
    db.commit()
    db.refresh(earning)
    return earning

@router.get("/")
def get_earnings(db: Session = Depends(get_db)):
    return db.query(Earning).all()

@router.get("/{earning_id}")
def get_earning(earning_id: int, db: Session = Depends(get_db)):
    earning = db.query(Earning).filter(Earning.id == earning_id).first()
    if not earning:
        raise HTTPException(status_code=404, detail="Record not found")
    return earning

@router.put("/{earning_id}/verify")
def update_verification_status(earning_id: int, status: str, db: Session = Depends(get_db)):
    earning = db.query(Earning).filter(Earning.id == earning_id).first()
    if not earning:
        raise HTTPException(status_code=404, detail="Record not found")

    earning.verification_status = status
    db.commit()
    db.refresh(earning)
    return earning

@router.post("/{earning_id}/upload-screenshot")
def upload_screenshot(earning_id: int, file: UploadFile = File(...), db: Session = Depends(get_db)):
    earning = db.query(Earning).filter(Earning.id == earning_id).first()
    if not earning:
        raise HTTPException(status_code=404, detail="Record not found")

    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    earning.screenshot_path = file_path
    db.commit()
    db.refresh(earning)
    return {"message": "Screenshot uploaded", "path": file_path}