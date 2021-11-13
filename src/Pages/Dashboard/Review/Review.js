import { Grid, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();


    const onSubmit = data => {
        fetch(`https://young-taiga-95204.herokuapp.com/review`, {
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
        <Grid item xs={12} md={12} sx={{ mt: '10%' }}>
            <Typography
                variant="h4"
                sx={{ mb: 3, fontWeight: 500 }}>
                Add a review</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Name"
                    defaultValue={user.displayName}
                    style={{ width: '30%', margin: 15 }}
                    {...register("name")} />
                <br />
                <input
                    placeholder="Email"
                    defaultValue={user.email}
                    style={{ width: '30%' }}
                    {...register("email", { required: true })} />
                {errors.email &&
                    <span className="text-danger">
                        This field is required
                    </span>}
                <br />
                <input
                    placeholder="Review"
                    style={{ width: '30%', margin: 15 }}
                    {...register("review", { required: true })} />
                {errors.email &&
                    <span className="text-danger">
                        This field is required
                    </span>}
                <br />
                <button
                    style={{ backgroundColor: '#6D09ED' }}
                    className="btn mb-3 text-white">
                    Submit</button>
            </form>
        </Grid>
    );
};

export default Review;