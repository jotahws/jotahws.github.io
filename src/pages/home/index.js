import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import Hero from '../../components/HomeHero';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Hero />
                <Link to="/subpage/minhaCustomParam"></Link>
            </div>
        );
    }
} 