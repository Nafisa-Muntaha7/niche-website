import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Album = ({ album }) => {
    const { img, name, price, description } = album;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ width: '100%', height: '100%' }}>
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
                    <Typography sx={{ mb: 1.5 }} >
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <NavLink to="/purchase" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" style={{ backgroundColor: '#6D09ED' }}>Buy Now</Button>
                    </NavLink>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Album;