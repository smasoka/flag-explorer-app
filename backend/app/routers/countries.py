# fefines routes

from fastapi import APIRouter, HTTPException
import requests
from app.models.countrydetails import Country, CountryDetails

router = APIRouter()

COUTRIES_URL = "https://restcountries.com/v3.1"

# List all coutries
@router.get("/countries")
def get_countries():
    response = requests.get(f"{COUTRIES_URL}/all")
    response.raise_for_status()
    countries = response.json()
    countries = [Country(name=country['name']['common'], flag=country['flags']['png']) for country in countries]
    return countries

@router.get("/countries/{name}")
def get_country_details(name: str):
    response = requests.get(f"{COUTRIES_URL}/name/{name}")
    response.raise_for_status()
    country_data = response.json()[0]
    return CountryDetails(name=country_data['name']['common'], 
                          population=country_data['population'], 
                          capital=country_data['capital'][0],
                          flag=country_data['flags']['png'])
