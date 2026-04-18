from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

app = FastAPI(title="FairGig Certificate Renderer")
templates = Jinja2Templates(directory="app/templates")

@app.get("/")
def home():
    return {"message": "Certificate Renderer Running"}

@app.get("/certificate", response_class=HTMLResponse)
def render_certificate(request: Request):
    data = {
        "worker_name": "Muhammad Akhtar",
        "date_range": "01 Apr 2026 - 15 Apr 2026",
        "verified_earnings": "PKR 10,750",
        "average_weekly": "PKR 5,375"
    }

    return templates.TemplateResponse(
        "certificate.html",
        {
            "request": request,
            "data": data
        }
    )