import React, { Component } from 'react';

import './style.css';
import dino from '../../assets/dino/dino.svg';
import CanvasParticles, {updateSceenSize} from './particles.js';
import $ from 'jquery';

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
        this.canvasHeight = 0;
    }

    componentDidMount() {
        this.canvasHeight = $('.hero').outerHeight(true) + $('header').outerHeight(true) + 100;
        const backCanvas = this.initCanvas('back-canvas');
        const frontCanvas = this.initCanvas('front-canvas');
        backCanvas.create(window.innerWidth, this.canvasHeight);
        frontCanvas.create(window.innerWidth, this.canvasHeight);
    }

    initCanvas = (canvasId) => {
        let canvas = document.getElementById(canvasId);
        canvas.width = window.innerWidth;
        canvas.height = this.canvasHeight;

        window.addEventListener('resize', function () {
            canvas.height = $('.hero').outerHeight(true) + $('header').outerHeight(true) + 100;
            canvas.width = window.innerWidth;
            updateSceenSize(canvas.height, canvas.width);
        });

        var cp = new CanvasParticles(canvas, this.config);

        return cp;
    }

    render() {
        return (
            <div className="hero">
                <canvas id="back-canvas"></canvas>
                <div className="flex flex-col-reverse md:flex-row justify-center">
                    <div className="hero-image flex justify-center ">
                        <img src={dino} alt="Dinossaur riding a hoverboard"/>
                    </div>
                    <div className="hero-title">
                        <h1 className="text-center sm:text-left">Hi there!</h1>
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