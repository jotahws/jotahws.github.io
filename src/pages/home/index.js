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
        let images = [];
        for (let i = 1; i <= 8; i++) {
            images.push(require('../../assets/particles/ptc-1.svg'));
            images.push(require('../../assets/particles/ptc-2.svg'));
            images.push(require('../../assets/particles/ptc-3.svg'));
            images.push(require('../../assets/particles/ptc-4.svg'));
            images.push(require('../../assets/particles/ptc-5.svg'));
            images.push(require('../../assets/particles/ptc-6.svg'));
            images.push(require('../../assets/particles/ptc-7.svg'));
            images.push(require('../../assets/particles/ptc-8.svg'));
            images.push(require('../../assets/particles/ptc-9.svg'));
            images.push(require('../../assets/particles/ptc-10.svg'));
            images.push(require('../../assets/particles/ptc-11.svg'));
            images.push(require('../../assets/particles/ptc-12.svg'));
            images.push(require('../../assets/particles/ptc-13.svg'));
            images.push(require('../../assets/particles/ptc-14.svg'));
            images.push(require('../../assets/particles/ptc-15.svg'));
            images.push(require('../../assets/particles/ptc-16.svg'));
        }
        const items = []

        let portion = 98/images.length;
        let left = 0;
        for (const [idx, value] of images.entries()) {
            left += portion;

            const style = {
                position: 'absolute',
                top: Math.random() * (700 - 0) + 0,
                left: left + '%',
                width: '10px',
                opacity: '0.08'
            }
            const rellaxSpeed = Math.random() * (10 - 0) + 0;
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
                        <p className="mb-1 mx-5 ">I’m a software developer with 10 years of experience, specializing in mobile and front-end development. My primary stack includes JavaScript, React.js, and React Native, but I also have experience with back-end development using Java and JS runtimes like Node.js and Deno.</p>
                        <p className="mb-1 mx-5"> I also love music, dance, photography and any kind of art. </p>
                        <hr className="my-4" />
                        <p className="text-gray-500">Check me out in other places of the <span className="cursive ">World Wide Web:</span></p>
                        <div className="justify-center flex mt-6">
                            <a href='https://github.com/jotahws' target="_blank"><i className="fab fa-github fa-2x mx-2 text-orange-500" /></a>
                            <a href='https://www.linkedin.com/in/joão-henrique-wind-santos-705aa8114/' target="_blank"><i className="fab fa-linkedin fa-2x mx-2 text-pink-500" /></a>
                        </div>
                    </div>
                </div>
                <div className="my-20">
                </div>
                <Link to="/subpage/minhaCustomParam"></Link>
            </div>
        );
    }
} 
