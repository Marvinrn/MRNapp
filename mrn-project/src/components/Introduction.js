import React, { useState } from 'react';
import { Link } from 'react-scroll'
import sunLogo from '../assets/sunEater.png';
import moonLogo from '../assets/moonEater.png';
import avatar from '../assets/Avatar1.png'
import avatarJojo from '../assets/mrnJojo1.png'

const Introduction = () => {
    const [themeMode, setThemeMode] = useState('')
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
        setThemeMode(theme)
    }
    return (
        <div>
            <header className="topBar">
                <nav className="navBar">
                    <span
                        className={theme === "darkMode" ? clickedClass : "mrnLogo"}
                        onClick={e => switchTheme(e)}
                    >       
                            {themeMode === "darkMode" || theme === "darkMode" ? 
                            (<img className="mrnLogo" src={moonLogo} alt='logo' /> 
                            ) : (<img className="mrnLogo" src={sunLogo} alt='logo' /> )}
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
                        Pr??sentation
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
            <section className="introSection">
                <div className="avatarBg">
                     <img className="mrnAvatar" src={themeMode === "darkMode" || theme === "darkMode"  ? (avatarJojo) : (avatar)}alt='logo' /> 
                </div>
                <div className="selfIntro" id="introduction">
                    <h1 className="selfTitle">Qui suis-je?</h1>
                    <br />
                    <p className="selfText"> Salut, je m'appelle Marvin RODRIGUES NOVO, j'ai 23 ans et je suis un jeune d??veloppeur web front-end ?? la recherche d'une alternance. J'ai d??but?? le d??veloppement web front-end depuis seulement quelques mois et je suis d??j?? passionn?? par ce milieu, c'est donc pour cette raison que j'ai d??cid?? de faire du d??veloppement web mon m??tier de r??ve.<br />
                    <br/>
                        Sur ce site vous retrouverez les diff??rents projets que j'ai pu r??aliser, ainsi que mes futurs projets ?? venir.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Introduction;