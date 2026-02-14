from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from . import crud, models, schemas
from .database import SessionLocal, engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="C.A.R.S. - Cars Archive of Repairs and Services")


@app.on_event("startup")
async def on_startup():
    # create db tables
    async with engine.begin() as conn:
        # await conn.run_sync(models.Base.metadata.drop_all)
        await conn.run_sync(models.Base.metadata.create_all)

@app.post("/cars/", response_model=schemas.Car)
async def create_car(car: schemas.CarCreate, db: AsyncSession = Depends(get_db)):
    return await crud.create_car(db=db, car=car)


@app.get("/cars/", response_model=list[schemas.Car])
async def read_cars(skip: int = 0, limit: int = 100, db: AsyncSession = Depends(get_db)):
    cars = await crud.get_cars(db, skip=skip, limit=limit)
    return cars


@app.get("/cars/{car_id}", response_model=schemas.Car)
async def read_car(car_id: int, db: AsyncSession = Depends(get_db)):
    db_car = await crud.get_car(db, car_id=car_id)
    if db_car is None:
        raise HTTPException(status_code=404, detail="Car not found")
    return db_car

@app.get("/")
async def root():
    return {"message": "Welcome to C.A.R.S. - Cars Archive of Repairs and Services"}
