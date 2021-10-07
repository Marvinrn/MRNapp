import React from 'react';
import sunLogo from '../assets/sunEater.png';

const Header = () => {
    return (
        <header className="topBar">
            <nav className="navBar">
                <img className="mrnLogo" src={sunLogo} alt='logo' />
                <p className="anchor" >Présentation</p>
                <p className="anchor" >Mes projets</p>
                <p className="anchor" >Mon CV</p>
            </nav>
        </header>
    );
};

export default Header;