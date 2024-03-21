import React from 'react';
import { NavLink } from "react-router-dom";
import logo from "../image/Logo.png";
import "../style/navigation.css";

const Navigation = () => {
    return (
        <div className="navigation">
            <img src={logo} alt="Logo"/>
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about">
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;