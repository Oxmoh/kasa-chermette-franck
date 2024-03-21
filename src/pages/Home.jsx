import React from 'react';
import Navigation from '../components/Navigation';
import image from "../image/image1.png";
import "../style/home.css";

const Home = () => {
    return (
        <div>
            <Navigation />
            <div className="image-container">
                <img src={image} className='image1' alt="Bord-de-mer" />
                <p className='image-text'>Chez vous, partout et ailleurs </p>
            </div>
        </div>
    );
};

export default Home;