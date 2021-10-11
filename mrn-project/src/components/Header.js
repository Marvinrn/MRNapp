import React from 'react';
import sunLogo from '../assets/sunEater.png';
import { Link } from 'react-scroll'

const Header = () => {
    return (
        <header className="topBar">
            <nav className="navBar">
                <img className="mrnLogo" src={sunLogo} alt='logo' />
                <Link
                    className="anchor" 
                    activeClass="active"
                    to="introduction"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                Présentation
                </Link>

                <Link
                    className="anchor" 
                    activeClass="active"
                    to="project"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                Mes projets
                </Link>

                <Link
                    className="anchor"
                    activeClass="active"
                    to="cv"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Mon CV
                </Link>
            </nav>
        </header>
    );
};

export default Header;