import { Container } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => console.log(data);


    return (
        <div>
            <Container>
                <h3>Add a Product</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="Product name"
                        style={{ width: '30%' }}
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
            </Container>
        </div>
    );
};

export default AddProduct;