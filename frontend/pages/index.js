import axios from "axios";
import Link from "next/link";

export default function Home({ countries }) {
    return (
        <div>
            <h1>Flag Explorer</h1>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "10px" }}>
                {countries.map((country) => (
                    <div key={country.name} style={{ textAlign: "center" }}>
                        <Link href={`/countries/${country.name}`}>
                            <img src={country.flag} alt={country.name} width="100" style={{ cursor: "pointer"}} />
                        </Link>
                        <p>{country.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    const response = await axios.get("http://127.0.0.1:8000/countries");

    return {
        props: {
            countries: response.data
        }
    }
}