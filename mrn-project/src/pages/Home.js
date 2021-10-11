import React from 'react';
import Cv from '../components/Cv';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Projects from '../components/Projects';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
    return (
        <div>
            <Header />
            <Introduction />
            <Projects />
            <Cv />
            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default Home;