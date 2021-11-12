import React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const commonStyles = {
    borderColor: 'text.primary'
};

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#EAE0F9' }}>
            <Container sx={{ paddingY: 8 }}>
                <Grid sx={{ ...commonStyles, borderBottom: 1 }} container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{ fontWeight: 500, marginBottom: 3 }} variant="h4">
                            Follow Us
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            CHECK OUT ALL OUR SOCIAL MEDIA CHANNELS BELOW, DON'T MISS OUT ANYTHING.
                        </Typography>
                        <Link to="/explore" style={{ textDecoration: 'none' }}>
                            <Button variant="outlined" sx={{ color: '#5A08CA', margin: 2 }}>Check out all our products</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{ fontWeight: 500, marginBottom: 3 }} variant="h4">
                            Contact Us
                        </Typography>
                        <Typography variant="h6">
                            CUSTOMER SUPPORT
                        </Typography>
                        <Typography variant="body1">
                            HELLO@PURPLEWAVE.COM
                            <br />
                            WHOLESALE / RESELLER / GROUP ORDER INQUIRY
                            <br />
                            WHOLESALE@PURPLEWAVE.COM
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography sx={{ fontWeight: 500, marginBottom: 3 }} variant="h4">
                            Info
                        </Typography>
                        <Typography variant="body1">
                            PURPLE WAVE
                            <br />
                            Registration Number: 563--25-0110
                            Representative: Wang Jackson
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                            Contact: 82 010 8488 4555
                            <br />
                            Address: 68 Ilsan, Republic of Korea
                        </Typography>
                    </Grid>
                </Grid>
                <footer style={{ marginTop: 10, fontWeight: 500 }}>© 2021 PURPLE WAVE. All Rights Reserved.</footer>
            </Container>
        </Box>
    );
};

export default Footer;


// const upcoming = [
//     {
//         img: 'https://cdn.shopify.com/s/files/1/2282/8555/products/weverse-shop-bts-2020-season-s-greetings-28597970698320_400x.jpg?v=1628432694',
//         name: "BTS 2020 SEASON'S GREETINGS",
//         price: '$83',
//     },
//     {
//         img: 'https://cdn.shopify.com/s/files/1/2282/8555/products/pr-apple-music-ateez-2022-season-s-greetings-one-s-youth-29083169685584_400x.jpg?v=1636520081',
//         name: "ATEEZ - 2022 SEASON'S GREETINGS",
//         price: '$64'
//     },
//     {
//         img: 'https://cdn.shopify.com/s/files/1/2282/8555/products/pr-apple-music-shinee-2022-season-s-greetings-29058614460496_400x.jpg?v=1635925547',
//         name: "SHINEE - 2022 SEASON'S GREETINGS",
//         price: '$41'
//     },
//     {
//         img: 'https://cdn.shopify.com/s/files/1/2282/8555/products/apple-music-pre-order-exo-2021-season-s-greetings-16746463363152_400x.jpg?v=1604144360',
//         name: "EXO - 2021 SEASON'S GREETINGS",
//         price: '$67'
//     },
//     {
//         img: 'https://cdn.shopify.com/s/files/1/2282/8555/products/pr-weverse-shop-bts-2022-season-s-greetings-29049103286352_400x.jpg?v=1635749681',
//         name: "[2ND PRESS] BTS - 2022 SEASON'S GREETINGS",
//         price: '$89'
//     },
//     {
//         img: 'https://cdn.shopify.com/s/files/1/2282/8555/products/pr-apple-music-nct-127-2022-season-s-greetings-29058564489296_400x.jpg?v=1635924820',
//         name: "NCT 127 - 2022 SEASON'S GREETINGS",
//         price: '$63'
//     },
//     {
//         img: 'https://cdn.shopify.com/s/files/1/2282/8555/products/pr-apple-music-wayv-2022-season-s-greetings-29058780004432_400x.jpg?v=1635928061',
//         name: "WAYV - 2022 SEASON'S GREETINGS",
//         price: '$64'
//     },
//     {
//         img: 'https://cdn.shopify.com/s/files/1/2282/8555/products/pr-apple-music-super-junior-2022-season-s-greetings-29058649555024_400x.jpg?v=1635925903',
//         name: "SUPER JUNIOR - 2022 SEASON'S GREETINGS",
//         price: '$66'
//     }
// ]