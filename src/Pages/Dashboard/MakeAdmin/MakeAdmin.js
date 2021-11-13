import { TextField, Button, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminsubmit = e => {
        const user = { email };
        fetch('https://young-taiga-95204.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    //setEmail('');
                    setSuccess(true);
                }
            })

        e.preventDefault();
    }

    return (
        <div>
            <Typography variant="h4" sx={{ fontWeight: 500, mt: '10%' }}> Make Admin</Typography>
            <form onSubmit={handleAdminsubmit}>
                <TextField
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard"
                    sx={{ width: '35%', mt: 3 }}
                />
                <br />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ backgroundColor: '#6D09ED', m: 3 }}>
                    Make admin
                </Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}

        </div>
    );
};

export default MakeAdmin;