from pydantic import BaseModel

class CarBase(BaseModel):
    make: str
    model: str
    year: int
    vin: str
    license_plate: str
    color: str
    owner: str

class CarCreate(CarBase):
    pass

class Car(CarBase):
    id: int

    class Config:
        from_attributes = True
