import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AllAlbums from '../AllAlbums/AllAlbums';

const Explore = () => {
    return (
        <div>
            <Navigation />
            <AllAlbums />
            <Footer />
        </div>
    );
};

export default Explore;