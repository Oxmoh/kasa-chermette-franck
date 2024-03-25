import React from 'react';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Bodylocation from '../components/Body-location';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Bodylocation />
            <Footer />
        </div>
    );
};

export default Home;