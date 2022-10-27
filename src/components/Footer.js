import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className="bg-dark">
            <div className="footer">
            <span className='footer-text'>© Copyright 2022 Jharna Khatun. All rights reserved.</span>
                <div className="social-link">
                <Link className='fa-style px-1'><FaFacebook/></Link>
                <Link className='fa-style px-1'><FaInstagram/></Link>
                <Link className='fa-style px-1'><FaTwitter/></Link>
                <Link className='fa-style px-1'><FaLinkedin/></Link>
                </div> 
            </div>
        </footer>
    );
};

export default Footer;