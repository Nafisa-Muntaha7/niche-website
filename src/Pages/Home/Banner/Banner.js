import React from 'react';
import { Carousel } from 'react-bootstrap';
import bts from '../../../images/banner/bts.jpg';
import blackpink from '../../../images/banner/blackpink.jpg';
import iu from '../../../images/banner/iu.jpg';

const Banner = () => {
    return (
        <Carousel style={{ marginTop: 12 }}>
            <Carousel.Item>
                <img
                    className="w-100 img-fluid"
                    src={iu}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100 img-fluid"
                    src={blackpink}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="w-100 img-fluid"
                    src={bts}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel >
    );
};

export default Banner;