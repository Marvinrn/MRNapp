import React from 'react';
import avatar from '../assets/Avatar1.png'

const Introduction = () => {
    return (
        <section className="introSection">
            <div className="avatarBg">
                <img className="mrnAvatar" src={avatar} alt='avatar' />
            </div>
            <div className="selfIntro">
                <h1 className="selfTitle">Qui suis-je?</h1>
                <br/>
                <p> Salut, je m'appel Marvin Rodrigues Novo et je suis un jeune développeur web front-end en recherche d'une alternance. Je débute le développement web front-end depuis seulement quelques mois et je suis déja passionné par ce milieu, c'est donc pour cette raison que j'ai décidé de faire du développement web mon métier de rêve.<br/>
                Sur ce site vous retrouverez les différents projets que j'ai pu réaliser ainsi que mes futurs projets à venir.
                </p>
            </div>
        </section>
    );
};

export default Introduction;