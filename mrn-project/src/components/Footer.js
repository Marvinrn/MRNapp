import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="footerContainer">
                <h2 className="footerTitle">Où me retrouver ?</h2>
                <div className="contact">
                    <a className="contactIcon" rel="noreferrer" href="https://www.linkedin.com/in/marvinrodriguesnovo" target="_blank"> <i className="fab fa-linkedin footerIcon" /></a>
                    <a className="contactIcon" rel="noreferrer" href="https://github.com/Marvinrn" target="_blank"> <i className="fab fa-github footerIcon" /></a>
                    <a href="mailto:marvinnrn@gmail.com" className="contactIcon"><i className="fas fa-envelope footerIcon" /></a>
                </div>

                    <h2 className="footerTitle">Remerciements à mon frère pour les différentes illustrations</h2>
                    <p className="thanksTo">Vous pouvez le retrouvez ici : <a href="https://www.instagram.com/defo.cover/" rel="noreferrer" target="_blank">   https://www.instagram.com/defo.cover/</a></p>
            </div>
        </footer>
    );
};

export default Footer;