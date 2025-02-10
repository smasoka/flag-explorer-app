from fastapi import FastAPI
from app.routers import countries

app = FastAPI()

app.include_router(countries.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to Flag Explorer API"}