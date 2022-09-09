import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo-reverse.svg';

const Header = () => {
    return (
        <header className="flex justify-center md:justify-start m-3 md:m-5">
            <Link to="/">
                <img src={logo} className="h-16 md:h-20" alt="logo" />
            </Link>
        </header>
    );
}

export default Header;