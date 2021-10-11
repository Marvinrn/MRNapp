import React from 'react';

const ScrollToTop = () => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <i className="fas fa-chevron-up scrollTop" onClick={scrollTop}></i> 
    );
};

export default ScrollToTop;