import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../image/Logo.png";
import "../style/navigation.css";

const Navigation = () => {
    return (
        <div className="navigation">
            <img src={logo} className="logo" alt="Logo"/>
            <ul className='links'>
                <NavLink to="/">
                    <li className='accueil'>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li className='about'>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;