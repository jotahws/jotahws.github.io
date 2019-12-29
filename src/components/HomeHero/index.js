import React from 'react';

import './style.css'
import dino from '../../assets/dino/dino.svg';

const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero-image">
                    <img src={dino}/>
                </div>
                <div className="hero-title">
                    <h1>Hello!</h1>
                    <h2>I'm so happy you are here!</h2>
                    <h3>My name is João and I like to create stuff</h3>
                </div>
            </div>
        </div>
    );
}

export default Hero;