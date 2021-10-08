import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import Projects from '../components/Projects';

const Home = () => {
    return (
        <div>
            <Header />
            <Introduction />
            <Projects />
            <Footer />
        </div>
    );
};

export default Home;