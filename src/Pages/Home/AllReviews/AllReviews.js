import React, { useEffect, useState } from 'react';
import { Card, Container, Grid, Typography } from '@mui/material';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://young-taiga-95204.herokuapp.com/allReviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <Container sx={{ my: '10%' }}>
            <Typography variant="h3" sx={{ mb: 5, fontWeight: 500 }}> Reviews </Typography>
            <Grid container spacing={5}>
                {
                    reviews?.map(review => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ width: '100%', height: '100%', boxShadow: 3, padding: 3, backgroundColor: '#F4F1F9' }}>
                                <Typography variant="h5">
                                    {review?.name}
                                </Typography>
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    Email: {review?.email}
                                </Typography>
                                <Typography variant="body1">
                                    {review?.review}
                                </Typography>
                            </Card>
                        </Grid>
                    ))};


            </Grid>
        </Container>
    );
};

export default AllReviews;