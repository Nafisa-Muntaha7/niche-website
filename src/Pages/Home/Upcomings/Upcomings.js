import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import UpcomingItem from '../UpcomingItem/UpcomingItem';

const commonStyles = {
    borderColor: 'text.primary'
};

const Upcomings = () => {
    const [upcomings, setUpcomings] = useState([]);
    useEffect(() => {
        fetch('https://young-taiga-95204.herokuapp.com/upcomings')
            .then(res => res.json())
            .then(data => setUpcomings(data));
    }, [])
    return (
        <Container sx={{ ...commonStyles, borderTop: 1 }}>
            <Typography variant="h4" sx={{ fontWeight: 500, paddingTop: 5 }}>
                Upcoming
            </Typography>
            <Grid container spacing={4} sx={{ my: 5 }}>
                {
                    upcomings.map(upcoming => <UpcomingItem
                        key={upcoming._id}
                        upcoming={upcoming}
                    >
                    </UpcomingItem>)
                }
            </Grid>
        </Container>
    );
};

export default Upcomings;