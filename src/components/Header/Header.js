import React from 'react';
import './Header.css'
import logo from '../../assests/event.png'

const Header = () => {
    return (
        <header>
            {/* Your header content goes here */}
            <div className="logo">
                <img src={logo} alt="EventPlanner360 Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#about">ABOUT</a></li>
                    <li><a href="#services">SERVICES</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header