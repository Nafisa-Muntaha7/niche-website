import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Album from '../Album/Album';

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        fetch('https://young-taiga-95204.herokuapp.com/homealbums')
            .then(res => res.json())
            .then(data => setAlbums(data));
    }, [])
    return (
        <Container>
            <Grid container spacing={3} sx={{ my: 10 }}>
                {
                    albums.map(album => <Album
                        key={album._id}
                        album={album}
                    >
                    </Album>)
                }
            </Grid>
        </Container>
    );
};

export default Albums;