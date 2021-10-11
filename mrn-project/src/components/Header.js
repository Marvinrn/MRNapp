import React, { useState } from 'react';
import sunLogo from '../assets/sunEater.png';
import moonLogo from '../assets/moonEater.png'
import { Link } from 'react-scroll'

const Header = () => {
    let clickedClass = "clicked"
    const body = document.body
    const lightTheme = "lightMode"
    const darkTheme = "darkMode"
    let theme

    if (localStorage) {
        theme = localStorage.getItem("theme")
        console.log(theme);
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    } else {
        body.classList.add(lightTheme)
    }

    const switchTheme = e => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme)
            e.target.classList.remove(clickedClass)
            localStorage.setItem("theme", "lightMode")
            theme = lightTheme
        } else {
            body.classList.replace(lightTheme, darkTheme)
            e.target.classList.remove(clickedClass)
            localStorage.setItem("theme", "darkMode")
            theme = darkTheme
        }
    }

    return (
        <header className="topBar">
            <nav className="navBar">
                <span
                    className={theme === "dark" ? clickedClass : "mrnLogo"}
                    onClick={e => switchTheme(e)}
                >
                    <img className="mrnLogo" src={sunLogo} alt='logo' />

                </span>
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