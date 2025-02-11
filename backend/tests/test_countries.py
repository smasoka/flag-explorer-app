from fastapi.testclient import TestClient
import pytest
from app.main import app

client = TestClient(app)  

@pytest.fixture
def test_client():
    return TestClient(app)

def test_get_countries(test_client):
    response = test_client.get("/countries")
    assert response.status_code == 200
    assert isinstance(response.json(), list)
    assert "name" in response.json()[0]
    assert "flag" in response.json()[0]

def test_get_country_details(test_client):
    response = test_client.get("/countries/South Africa")
    assert response.status_code == 200
    data = response.json()
    assert "name" in data
    assert "population" in data
    assert "capital" in data
    assert "flag" in data
