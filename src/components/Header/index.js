import React from 'react';
import { Router, Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import './style.css'

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src={logo} className="header-logo" alt="logo" />
            </Link>
        </header>
    );
}

export default Header;