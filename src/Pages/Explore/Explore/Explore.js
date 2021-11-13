import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AddedProduct from '../AddedProduct/AddedProduct';
import AllAlbums from '../AllAlbums/AllAlbums';

const Explore = () => {
    return (
        <div>
            <Navigation />
            <AllAlbums />
            <AddedProduct />
            <Footer />
        </div>
    );
};

export default Explore;