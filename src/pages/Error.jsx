import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import "../style/error.css"

const Error = () => {
    return (
        <div>
            <Navigation />
            <p className='error'>404</p>
            <p className='text1'>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">
                <p className='redirection'>Retourner sur la page d'accueil</p>
            </NavLink>
            <Footer />
        </div>
    );
};

export default Error;