import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Cart from '../Cart/Cart';
import Shipping from '../Shipping/Shipping';

const Purchase = () => {
    return (
        <>
            <Navigation />
            <Cart />
            <Shipping />
            <Footer />
        </>
    );
};

export default Purchase;