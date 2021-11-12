import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid } from '@mui/material';


const UpcomingItem = ({ upcoming }) => {
    const { img, name, price } = upcoming;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ width: '100%', height: '100%', boxShadow: 1, mb: 5 }}>
                <CardMedia
                    component="img"
                    style={{ width: '100%', margin: '0 auto' }}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h5" component="div">
                        Price: {price}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default UpcomingItem;