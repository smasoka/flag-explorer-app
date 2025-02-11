import axios from "axios";

export async function getServerSideProps() {
    const response = await axios.get("http://127.0.0.1:8000/countries");
    console.log(response.data);

    return {
        props: {
            countries: response.data
        }
    }
}

export default function Home({ countries }) {
    return (
        <div>
            <h1>Flag Explorer</h1>
            <div>
                {countries.map((country) => (
                    <div>
                        <img src={country.flag} alt={country.name} width="100" />
                        <p>{country.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
