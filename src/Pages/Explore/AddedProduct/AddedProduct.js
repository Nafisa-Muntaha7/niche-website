import { Typography, Container, Grid, Card, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const AddedProduct = () => {
    const [addProducts, setAddProducts] = useState([]);
    useEffect(() => {
        fetch(`https://young-taiga-95204.herokuapp.com/allProducts`)
            .then(res => res.json())
            .then(data => setAddProducts(data))
    }, [])

    return (
        <Container>
            <Grid container spacing={5}>
                {
                    addProducts?.map(addProduct => (

                        <Grid item xs={12} sm={6} md={6}>
                            <Card sx={{ width: '100%', height: '100%', border: 0, boxShadow: 0, mb: 4 }}>
                                <CardMedia
                                    component="img"
                                    style={{ width: 'auto', margin: '0 auto' }}
                                    image={addProduct?.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {addProduct?.name}
                                    </Typography>
                                    <Typography variant="h5" component="div">
                                        Price: {addProduct?.price}
                                    </Typography>
                                    <Typography sx={{ mb: 1 }} >
                                        {addProduct?.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <NavLink to='/purchase' style={{ textDecoration: 'none' }}>
                                        <Button variant="contained" sx={{ backgroundColor: '#6D09ED', mx: 5 }}>Purchase</Button>
                                    </NavLink>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))};
            </Grid>
        </Container>
    );
};

export default AddedProduct;