import React, { Component } from 'react';

import LandingContainer from "../../components/HomeHero";
import { Link } from 'react-router-dom';

export default class Main extends Component {
    render() {
        return (
            <div>
                <LandingContainer />
                <Link to="/subpage/minhaCustomParam"></Link>
            </div>
        );
    }
} 