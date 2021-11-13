import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch(`http://localhost:7000/addProducts`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result))

        console.log(data);
    }

    return (
        <div>
            <Container sx={{ mt: '5%' }}>
                <Grid item xs={12} md={12}>
                    <Typography
                        variant="h4"
                        sx={{ mb: 3, fontWeight: 500 }}>
                        Add a review</Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            placeholder="Product name"
                            style={{ width: '30%', padding: 5 }}
                            {...register("name", { required: true })} />
                        <br />
                        <input
                            placeholder="Price"
                            style={{ width: '30%', margin: 15, padding: 5 }}
                            {...register("price", { required: true })} />
                        {errors.email &&
                            <span className="text-danger">
                                This field is required
                            </span>}
                        <br />
                        <input
                            placeholder="Description"
                            style={{ width: '30%', padding: 5 }}
                            {...register("description", { required: true })} />
                        <br />
                        <input
                            placeholder="Image Link"
                            style={{ width: '30%', margin: 15, padding: 5 }}
                            {...register("image", { required: true })} />
                        <br />
                        <button
                            style={{ backgroundColor: '#6D09ED', color: 'white' }}
                            className="btn mb-3">
                            Submit</button>
                    </form>
                </Grid>
            </Container>
        </div>
    );
};

export default AddProduct;