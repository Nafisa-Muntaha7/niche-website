import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
//import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Shipping = () => {

    const { purchaseId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:7000/purchaseProduct/${purchaseId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    console.log(product)


    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    //const history = useHistory();
    const onSubmit = data => console.log(data);

    // const handleBooking = () => {
    //     history.push('/place-order');
    // };

    return (
        <Container>
            <Grid container spacing={3} sx={{ my: 5 }}>
                <Grid item xs={12} sm={12} md={6}>
                    <Card sx={{ width: '100%', height: '100%', border: 0, boxShadow: 0, mb: 4 }}>
                        <CardMedia
                            component="img"
                            style={{ width: 'auto', margin: '0 auto' }}
                            image={product?.img}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="h6" gutterBottom>
                                {product?.name}
                            </Typography>
                            <Typography variant="h5" component="div">
                                Price: {product?.price}
                            </Typography>
                            <Typography sx={{ mb: 1 }} >
                                {product?.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={12} md={6}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            placeholder="Name"
                            style={{ width: '30%' }}
                            defaultValue={user.displayName}
                            {...register("name")} />
                        <br />
                        <input
                            placeholder="Email"
                            defaultValue={user.email}
                            style={{ width: '30%', margin: 15 }}
                            {...register("email", { required: true })} />
                        {errors.email &&
                            <span className="text-danger">
                                This field is required
                            </span>}
                        <br />
                        <input
                            placeholder="Address"
                            style={{ width: '30%' }}
                            {...register("address", { required: true })} />
                        <br />
                        <input
                            placeholder="Phone"
                            defaultValue=""
                            style={{ width: '30%', margin: 15 }}
                            {...register("phone", { required: true })} />
                        <br />
                        <button
                            style={{ backgroundColor: '#6D09ED', color: 'white' }}
                            className="btn mb-3">
                            Submit</button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Shipping;