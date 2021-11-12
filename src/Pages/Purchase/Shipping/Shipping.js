import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Register from '../../Login/Register/Register';

const Shipping = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const history = useHistory();
    const onSubmit = data => console.log(data);

    const handleBooking = () => {
        history.push('/place-order');
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    placeholder="Name"
                    style={{ width: '30%' }}
                    defaultValue={user.displayName}
                    {...Register("name")} />
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
                    {...Register("phone", { required: true })} />
                <br />
                <button
                    onClick={handleBooking}
                    style={{ backgroundColor: '#6D09ED', color: 'white' }}
                    className="btn mb-3">
                    Submit</button>
            </form>
        </div>
    );
};

export default Shipping;