import React from 'react';
import Navigation from '../components/Navigation';
import image from "../image/image1.png";

const Home = () => {
    return (
        <div>
            <Navigation />
            <img src={image} alt="Bord-de-mer"/>
        </div>
    );
};

export default Home;