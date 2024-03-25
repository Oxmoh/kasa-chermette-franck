import React from 'react';
import logo1 from "../image/Logo-footer.png";
import "../style/footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <img src={logo1} className='logo1' alt='logo' />
            <p className='droit'>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;