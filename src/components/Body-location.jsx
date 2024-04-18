import React from 'react'
import "../style/location.css"
import useFetch from "../utils/Fetch.js"
import { Link } from 'react-router-dom';


export default function Bodylocation() {
    const { data, loading, error } = useFetch("/logements.json");

    if (loading) return <div>Loading ...</div>;
    if (error) return <div>Error: {error}</div>;

    console.log(data);

    return (
        <div className='background'>
            <div className="grid-container">
                <ul className="galery">
                    {data.map((item) => (
                        <li key={item.id}>
                            <Link to={`/House/${item.id}`}>
                                <div className="item" appartment={item}>
                                    <img src={item.cover} alt="appartement" />
                                    <h3 className="title">{item.title}</h3>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
