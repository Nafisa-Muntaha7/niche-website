import { Container, Grid, TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const onChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleForm = e => {
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12} sx={{ mt: '15%' }}>
                    <Typography variant="h3" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleForm}>
                        <TextField
                            sx={{ width: '50%', m: 2 }}
                            onChange={onChange}
                            id="standard-basic1"
                            label="Your Email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '50%', m: 2 }}
                            onChange={onChange}
                            id="standard-basic2"
                            label="Your Password"
                            type="password"
                            variant="standard" />
                        <br />
                        <Button variant="contained" style={{ width: '25%', margin: 5, backgroundColor: '#6D09ED' }}>Sign In</Button>
                        <NavLink to="/register">
                            <Button
                                variant="text"
                                style={{ color: '#6D09ED' }}>
                                New User? Please Register
                            </Button>
                        </NavLink>
                    </form>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;