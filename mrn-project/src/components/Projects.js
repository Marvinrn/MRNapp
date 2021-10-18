import React from 'react';
import OdenWeeb from '../assets/OdenLogo1.png'
import ReserviaReact from '../assets/ReserviaReact.png'
import Reservia from '../assets/Reservia.png'


const Projects = () => {
    return (
        <section className="projectSection">
            <h1 className="projectTitle">Mes Projets</h1>
            <div className="projectPreview" id="project">
                <div className="cardsOden">
                        <img className="cardsLogo" src={OdenWeeb} alt="logo" />
                </div>

                <div className="cardsRR">
                        <img className="cardsLogo" src={ReserviaReact} alt="logo" />
                </div>

                <div className="cardsReservia">
                        <img className="cardsLogo" src={Reservia} alt="logo" />
                </div>
            </div>
        </section>
    );
};

export default Projects;