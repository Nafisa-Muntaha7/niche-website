import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation'
import Banner from '../Banner/Banner'
import Footer from '../../Shared/Footer/Footer';
import Albums from '../Albums/Albums';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Albums />
            <Footer />
        </div>
    );
};

export default Home;