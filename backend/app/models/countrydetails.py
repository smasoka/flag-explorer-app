# Define data models

from pydantic import BaseModel

class Country(BaseModel):
    name: str
    flag: str

class CountryDetails(BaseModel):
    name: str
    population: int
    capital: str
    flag: str