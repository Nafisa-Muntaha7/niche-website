import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Product from '../Product/Product';

const AllAlbums = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://young-taiga-95204.herokuapp.com/albums')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <Container>
            <Grid container spacing={3} sx={{ my: 5 }}>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    >
                    </Product>)
                }
            </Grid>
        </Container>
    );
};

export default AllAlbums;