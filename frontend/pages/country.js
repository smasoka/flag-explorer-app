import axios from "axios";

export async function getServerSideProps(context) {
    const { country } = context.params;

    const response = await axios.get(`http://127.0.0.1:8000/countries/${country}`);
    console.log(response.data);

    return {
        props: {
            country: response.data
        }
    }
}

export default function CountryDetails({ country }) {
    return (
        <div>
            <h1>{country.name}</h1>
            <img src={country.flag} alt={country.name} width="200" />
            <p>Population: {country.population}</p>
            <p>Capital: {country.capital}</p>
        </div>
    );
}