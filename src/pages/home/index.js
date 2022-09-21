import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Hero from '../../components/HomeHero';
import Rellax from 'rellax';
import profilePic from '../../assets/profile.jpg'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Separator from '../../components/Separator';

export default class Main extends Component {

    componentDidMount() {
        new Rellax('.rellax');
    }

    getForms = () => {
        const images = [];
        for (let i = 1; i <= 8; i++) {
            images.push(require('../../assets/particles/ptc-' + i + '.svg'));
        }
        const items = []

        for (const [idx, value] of images.entries()) {
            let left;
            if (idx >= 4) {
                left = (30 * idx / 4) + 40;
            } else {
                left = (30 * idx / 4) + 2;
            }
            const style = {
                position: 'absolute',
                top: Math.random() * (500 - 0) + 0,
                left: left + '%',
                width: '70px'
            }
            const rellaxSpeed = Math.random() * (5 - 0) + 0;
            // const rellaxSpeed = -10;
            items.push(<img src={value} key={idx} style={style} className="rellax" data-rellax-speed={rellaxSpeed} alt="" />)
        }
        return items;
    }

    render() {
        const particlesImg = this.getForms();
        return (
            <div>
                <Hero />
                <div className="relative mt-32">
                    {particlesImg}
                    <div className="profile mx-auto w-32 text-center relative p-5 rounded-lg">
                        <img src={profilePic} className="profile" alt="Portait of Joao" />
                        <h4 className="mb-1 mx-5 "> My name is João Henrique Wind, I'm a brazilian software developer, currently living in Lisbon, Portugal. </h4> <br></br>
                        <p className="mb-1 mx-5 ">I have 6+ years of experience in programming, focusing mainly in mobile and front-end applications. I usually use Javascript, ReactJS and React Native, but I also work with Java for the back-end. </p>
                        <p className="mb-1 mx-5"> I also love music, dance, photography and any kind of art. </p>
                        <hr className="my-4" />
                        <p className="text-gray-500">Check me out in other places of the <span className="cursive ">World Wide Web:</span></p>
                        <div className="justify-center flex mt-6">
                            <a href='https://github.com/jotahws' target="_blank"><i className="fab fa-github fa-2x mx-2 text-orange-500" /></a>
                            <a href='https://www.linkedin.com/in/joão-henrique-wind-santos-705aa8114/' target="_blank"><i className="fab fa-linkedin fa-2x mx-2 text-pink-500" /></a>
                            <a href='https://twitter.com/jotahws' target="_blank"><i className="fab fa-twitter fa-2x mx-2 text-yellow-500" /></a>
                        </div>
                    </div>
                    <Separator name="Olá"/>
                </div>
                <div className="my-64">
                </div>
                <Link to="/subpage/minhaCustomParam"></Link>
            </div>
        );
    }
} 
