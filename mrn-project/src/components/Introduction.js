import React from 'react';
import avatar from '../assets/avatar.png'

const Introduction = () => {
    return (
        <section className="introSection">
            <h1 className="introTitle">Front-end Developer</h1>
            <img className="mrnAvatar" src={avatar} alt='avatar' />
        </section>
    );
};

export default Introduction;