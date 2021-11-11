import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth'

const Navigation = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{ background: '#6D09ED', color: 'white' }} color="transparent" position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {user?.email && <span>Logged in: {user.email}</span>}

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Purple Wave
                    </Typography>
                    <NavLink to="/home" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Home</Button></NavLink>
                    <NavLink to="/explore" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Explore</Button></NavLink>
                    {
                        user?.email ?
                            <Button
                                onClick={logout} color="inherit">Logout</Button>
                            :
                            <NavLink to="/login" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Login</Button></NavLink>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;