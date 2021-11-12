import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Footer from '../../Shared/Footer/Footer';
import Albums from '../Albums/Albums';
import Upcomings from '../Upcomings/Upcomings';
import AllReviews from '../AllReviews/AllReviews';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Albums />
            <Upcomings />
            <AllReviews />
            <Footer />
        </div>
    );
};

export default Home;