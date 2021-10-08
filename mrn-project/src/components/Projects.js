import React from 'react';
import reserviaVideo from '../assets/Reservia - Mozilla Firefox 2021-10-07 17-33-02.mp4';
import reserviaReactVideo from '../assets/Reservia React - Mozilla Firefox 2021-10-07 17-43-21.mp4';
import odenVideo from '../assets/odenVideo.mp4';

const Projects = () => {

    const handleonMouseOver = (e) => {
        e.currentTarget.play();
    }

    const handleonMouseOut = (e) => {
        e.currentTarget.pause();
    }

    return (
        <section className="projectSection">
            <h1 className="projectTitle">Mes Projets</h1>

            <div className="projectPreview">

                <div className="cards">
                    <h1 className="cardstitles">Oden Weeb</h1>
                    <video
                        className="cardsVid"
                        width="500"
                        height="250"
                        muted
                        loop
                        onMouseOver={handleonMouseOver}
                        onMouseOut={handleonMouseOut}
                    >
                        <source src={odenVideo} type="video/mp4" />
                    </video>
                    <div className="cardsQuote">
                        <p > Oden Weeb est un petit projet d'entrainement à React et Sass sur ma plus grande passion "L'Univers Manga". </p>
                        <br />
                        <a className="cardsLink" href='https://oden-weeb.vercel.app/' target="_blank" rel="noopener noreferrer">Voir Projet</a>
                    </div>
                </div>

                <div className="cards">
                    <h1 className="cardstitles">Reservia-React</h1>
                    <video
                        className="cardsVid"
                        width="500"
                        height="250"
                        muted
                        loop
                        onMouseOver={handleonMouseOver}
                        onMouseOut={handleonMouseOut}
                    >
                        <source src={reserviaReactVideo} type="video/mp4" />
                    </video>
                    <div className="cardsQuote">
                        <p > Projet d'entrainement à React en partant du projet Réservia précédent et en y ajoutant de nouvelles fonctionnalités. </p>
                        <br />
                        <a className="cardsLink" href='https://marvinrn.github.io/reservia-react/' target="_blank" rel="noopener noreferrer">Voir Projet</a>
                    </div>
                </div>

                <div className="cards">
                    <h1 className="cardstitles">Reservia</h1>
                    <video
                        className="cardsVid"
                        width="500"
                        height="250"
                        muted
                        loop
                        onMouseOver={handleonMouseOver}
                        onMouseOut={handleonMouseOut}
                    >
                        <source src={reserviaVideo} type="video/mp4" />
                    </video>
                    <div className="cardsQuote">
                        <p > Projet n°2 du parcours développeur web OpenClassrooms.
                            Intégration d'un site de réservation d'hôtel a Marseille, tout en respectant les maquettes (desktop et mobile) et les contraintes imposées par le client. </p>
                        <br />
                        <a className="cardsLink" href='https://marvinrn.github.io/MarvinRodriguesNovo_2_07032021/' target="_blank" rel="noopener noreferrer">Voir Projet</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;