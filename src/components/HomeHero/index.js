import React, { Component } from 'react';

import './style.css'
import dino from '../../assets/dino/dino.svg';
import CanvasParticles from './particles.js';

//Component
class Hero extends Component {
    constructor() {
        super();
        this.config = {
            particle: {
                amount: 25,
                colors: ['#FF996D', '#2B7789', '#DDC5D4', '#FEC054'],
                minSize: 10,
                maxSize: 15,
                minVelocity: 2,
                maxVelocity: 5
            }
        }
    }

    componentDidMount() {
        const backCanvas = this.initCanvas('back-canvas');
        const frontCanvas = this.initCanvas('front-canvas');
        backCanvas.create(window.innerWidth, window.innerHeight);
        frontCanvas.create(window.innerWidth, window.innerHeight);
    }

    initCanvas = (canvasId) => {
        let canvas = document.getElementById(canvasId);
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener('resize', function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight ;
        });

        var cp = new CanvasParticles(canvas, this.config);

        return cp;
    }

    render() {
        return (
            <div className="hero">
                <canvas id="back-canvas"></canvas>
                <div className="container">
                    <div className="hero-image">
                        <img src={dino} alt="Dinossaur riding a hoverboard"/>
                    </div>
                    <div className="hero-title">
                        <h1>Hi there!</h1>
                        <h2>I'm so happy you are here!</h2>
                        <h3>My name is João and I like to create stuff</h3>
                    </div>
                </div>
                <canvas id="front-canvas"></canvas>
            </div>
        );
    }
}

export default Hero;