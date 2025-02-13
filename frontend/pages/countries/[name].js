import axios from "axios";
import Link from "next/link";

export default function CountryDetails({ country }) {
    return (
        <div>
            <h1>{country.name}</h1>
            <img src={country.flag} alt={country.name} width="200" />
            <p>Population: {country.population}</p>
            <p>Capital: {country.capital}</p>

            <Link href="/">
                <button style={{ marginTop: "20px", padding: "10px", cursor: "pointer" }}>
                    Back to Home
                </button>            
            </Link>
        </div>
    );
}

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
