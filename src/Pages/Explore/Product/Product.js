import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Product = ({ product }) => {
    const { img, name, price, description } = product;

    return (
        <Grid item xs={12} sm={6} md={6}>
            <Card sx={{ width: '100%', height: '100%', border: 0, boxShadow: 0, mb: 4 }}>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', margin: '0 auto' }}
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
                    <Typography sx={{ mb: 1 }} >
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <NavLink to="/purchase" style={{ textDecoration: 'none' }}>
                        <Button variant="contained" sx={{ backgroundColor: '#6D09ED', mx: 5 }}>Purchase</Button>
                    </NavLink>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;