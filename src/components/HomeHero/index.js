import React, { Component } from 'react';

import './style.css';
import dino from '../../assets/rocket.png';
import CanvasParticles, {updateScreenSize} from '../../util/particles.js';
import $ from 'jquery';

//Component
class Hero extends Component {
    constructor() {
        super();
        this.config = {
            particle: {
                amount: 30,
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
        //$('.hero').css('min-height', window.innerHeight - $('header').outerHeight(true));
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
            updateScreenSize(canvas.height, canvas.width);
        });

        var cp = new CanvasParticles(canvas, this.config);

        return cp;
    }

    moreParticles = () => {
        if (this.config.particle.amount <= 85) {
            this.config.particle.amount += 20;
            const backCanvas = this.initCanvas('back-canvas');
            const frontCanvas = this.initCanvas('front-canvas');
            backCanvas.create(window.innerWidth, this.canvasHeight);
            frontCanvas.create(window.innerWidth, this.canvasHeight);
        }
    }

    lessParticles = () => {
        this.config.particle.amount -= this.config.particle.amount <= 0 ? 0 : 20;
        const backCanvas = this.initCanvas('back-canvas');
        const frontCanvas = this.initCanvas('front-canvas');
        backCanvas.create(window.innerWidth, this.canvasHeight);
        frontCanvas.create(window.innerWidth, this.canvasHeight);
    }

    render() {
        return (
            <div className="hero">
                <canvas id="back-canvas"></canvas>
                <div className="flex flex-col-reverse md:flex-row justify-center">
                    <div className="hero-image flex justify-center ">
                        <img className="hero-img-anim" src={dino} alt="Dinossaur riding a hoverboard"/>
                    </div>
                    <div className="hero-title">
                        <h1 className="text-center sm:text-left">Hi there!</h1>
                        <h2>I'm happy you are here</h2>
                        <h3>My name is João and I like to create stuff</h3>
                    </div>
                </div>
                <canvas id="front-canvas"></canvas>
                <div id="canvas-menu">
                    {/* <button className="btn-pill btn-sm btn-blue ptc-btn" onClick={this.moreParticles}>More particles</button>
                    <button className="btn-pill btn-sm btn-blue mt-1 ptc-btn" onClick={this.lessParticles}>Less particles</button> */}
                </div>
            </div>
        );
    }
}

export default Hero;