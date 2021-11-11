import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();

    const onChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleForm = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{ mt: '15%' }}>
                    <Typography variant="h3" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleForm}>
                        <TextField
                            sx={{ width: '50%', m: 2 }}
                            id="standard-basic1"
                            label="Your Email"
                            type="email"
                            name="email"
                            onChange={onChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '50%', m: 2 }}
                            id="standard-basic2"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={onChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '50%', m: 2 }}
                            id="standard-basic3"
                            label="Confirm Password"
                            type="password"
                            name="password2"
                            onChange={onChange}
                            variant="standard" />
                        <br />
                        <Button onClick={handleForm} variant="contained" style={{ width: '25%', margin: 5, backgroundColor: '#6D09ED' }}>Sign In</Button>
                        <NavLink to="/login">
                            <Button
                                variant="text"
                                style={{ color: '#6D09ED' }}>
                                Already Registered? Please Login
                            </Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress color="secondary" />}
                    {user?.email && <Alert severity="success">Registered successfully!</Alert>
                    }
                    {authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
            </Grid>
        </Container >
    );
};

export default Register;