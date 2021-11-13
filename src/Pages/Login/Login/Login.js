import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, signInWithGoogle, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const onBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleForm = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
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
                            onBlur={onBlur}
                            id="standard-basic1"
                            label="Your Email"
                            name="email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '50%', m: 2 }}
                            onBlur={onBlur}
                            id="standard-basic2"
                            label="Your Password"
                            type="password"
                            name="password"
                            variant="standard" />
                        <br />
                        <Button
                            onClick={handleForm}
                            variant="contained"
                            style={{ width: '25%', margin: 5, backgroundColor: '#6D09ED' }}>
                            Sign In
                        </Button>
                        <NavLink to="/register">
                            <Button
                                variant="text"
                                style={{ color: '#6D09ED' }}>
                                New User? Please Register
                            </Button>
                        </NavLink>
                        {isLoading && <CircularProgress color="secondary" />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <Button
                        onClick={handleGoogleSignIn}
                        variant="outlined"
                        color="secondary"
                        sx={{ width: '25%', mt: 2 }}>
                        Google Sign In
                    </Button>
                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;