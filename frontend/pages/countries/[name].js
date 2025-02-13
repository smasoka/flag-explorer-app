import axios from "axios";
import Link from "next/link";

export default function CountryDetails({ country, errorMassage }) {

    if (!country) {
        return (
            <div style={{ textAlign: "center" }}> 
                <h1>{errorMassage}</h1>
                <Link href="/">
                    <button style={{ marginTop: "20px", padding: "10px", cursor: "pointer" }}>
                        Back to Home
                    </button>            
                </Link>
            </div>
        );
    }

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
    const { name } = context.params;

    try {
        const response = await axios.get(`http://127.0.0.1:8000/countries/${name}`);
        console.log(response.data);

        return {
            props: {
                country: response.data
            }
        }

    } catch (error) {
        console.error("Error fetching country data:", error);
        return {
            props: {
                errorMassage: `Country ${name} is not found!`
            }
        }
    }
}
