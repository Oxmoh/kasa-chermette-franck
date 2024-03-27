import { useState, useEffect } from 'react';
import React from 'react'
import "../style/location.css"
import getHouse from "../utils/Fetch.js"
import Card from '../utils/Card.js';


export default function Bodylocation() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch
            .get(getHouse)
            .then((res) => setData(res.data));
    }, []);
    return (
        <div className='background'>
            <div className='project'> {data.map((title, pictures, index) => (
                <Card key={index} title={title} pictures={pictures} />
            ))}
            </div>
        </div>
    )
}
