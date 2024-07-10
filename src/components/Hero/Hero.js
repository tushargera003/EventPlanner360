import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero">
            {/* Your hero section content goes here */}
            <div className="hero-content">
                <h1>Welcome to EventPlanner360</h1>
                <p>Your ultimate solution for seamless event planning</p>
                <button>Get Started</button>
            </div>
        </section>
    );
};

export default Hero