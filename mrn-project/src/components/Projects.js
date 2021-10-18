import React, { useState } from 'react';
import OdenWeeb from '../assets/OdenLogo1.png'
import ReserviaReact from '../assets/ReserviaReact.png'
import Reservia from '../assets/Reservia.png'
import OdenHover from './projectsHover/OdenHover';
import RRHOver from './projectsHover/RRHOver';
import ReserviaHover from './projectsHover/ReserviaHover';


const Projects = () => {
    const [onHover, setOnHover] = useState(false)
    const [rrOnHover, setRrOnHover] = useState(false)
    const [reserviaOnHover, setReserviaOnHover] = useState(false)

    const odenOnMouseHover = () => {
        setOnHover(true)
    }

    const odenOnMouseOut = () => {
        setOnHover(false)
    }

    const rrOnMouseHover = () => {
        setRrOnHover(true)
    }

    const rrOnMouseOut = () => {
        setRrOnHover(false)
    }

    const reserviaOnMouseHover = () => {
        setReserviaOnHover(true)
    }

    const reserviaOnMouseOut = () => {
        setReserviaOnHover(false)
    }

    return (
        <section className="projectSection">
            <h1 className="projectTitle">Mes Projets</h1>
            <div className="projectPreview" id="project">
                <div className="cardsOden"
                    onMouseEnter={odenOnMouseHover}
                    onMouseLeave={odenOnMouseOut}
                    onClick={() => setOnHover(!onHover)}
                >
                    {onHover ? <OdenHover /> : <img className="cardsLogo" src={OdenWeeb} alt="logo" />}
                </div>

                <div className="cardsRR"
                    onMouseEnter={rrOnMouseHover}
                    onMouseLeave={rrOnMouseOut}
                    onClick={() => setRrOnHover(!rrOnHover)}
                >
                    {rrOnHover ? <RRHOver /> : <img className="cardsLogo" src={ReserviaReact} alt="logo" />}
                </div>

                <div className="cardsReservia"
                    onMouseEnter={reserviaOnMouseHover}
                    onMouseLeave={reserviaOnMouseOut}
                    onClick={() => setReserviaOnHover(!reserviaOnHover)}
                >
                    {reserviaOnHover ? <ReserviaHover /> : <img className="cardsLogo" src={Reservia} alt="logo" />}
                </div>
            </div>
        </section>
    );
};

export default Projects;