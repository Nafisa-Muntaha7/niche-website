import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton'; import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Switch, Route, useRouteMatch, NavLink } from "react-router-dom";
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from '../../../hooks/useAuth';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';



const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const { admin } = useAuth();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <NavLink to="/home" style={{ textDecoration: 'none', display: 'block' }}>
                <Button variant="outlined" sx={{ color: '#6D09ED', mt: 3 }}>Home</Button>
            </NavLink>
            <NavLink to={`${url}/pay`} style={{ textDecoration: 'none', display: 'block' }}>
                <Button variant="text" sx={{ color: '#6D09ED', mt: 2 }}>Pay</Button>
            </NavLink>
            <NavLink to={`${url}/my-orders`} style={{ textDecoration: 'none', display: 'block' }}>
                <Button variant="text" sx={{ color: '#6D09ED', mt: 1 }}>My Orders</Button>
            </NavLink>
            <NavLink to={`${url}/review`} style={{ textDecoration: 'none', display: 'block' }}>
                <Button variant="text" sx={{ color: '#6D09ED', mt: 1 }}>Add Review</Button>
            </NavLink>

            {admin && <Box>
                <NavLink to={`${url}/make-admin`} style={{ textDecoration: 'none', display: 'block' }}>
                    <Button variant="text" sx={{ color: '#6D09ED', mt: 1 }}>Make Admin</Button>
                </NavLink>
                <NavLink to={`${url}/add-product`} style={{ textDecoration: 'none', display: 'block' }}>
                    <Button variant="text" sx={{ color: '#6D09ED', mt: 1 }}>Add Product</Button>
                </NavLink>
                <NavLink to={`${url}/manage-products`} style={{ textDecoration: 'none', display: 'block' }}>
                    <Button variant="text" sx={{ color: '#6D09ED', mt: 1 }}>Manage Products</Button>
                </NavLink>
                <NavLink to={`${url}/manage-orders`} style={{ textDecoration: 'none', display: 'block' }}>
                    <Button variant="text" sx={{ color: '#6D09ED', mt: 1 }}>Manage Orders</Button>
                </NavLink>
            </Box>}

            <List>
                {['Inbox', 'Starred', 'Send Email', 'Draft'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    background: '#6D09ED',
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                    <Route path={`${path}/my-orders`}>
                        <MyOrders />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                    <Route path={`${path}/make-admin`}>
                        <MakeAdmin />
                    </Route>
                    <Route path={`${path}/add-product`}>
                        <AddProduct />
                    </Route>
                    <Route path={`${path}/manage-products`}>
                        <ManageProducts />
                    </Route>
                    <Route path={`${path}/manage-orders`}>
                        <ManageOrders />
                    </Route>
                </Switch>

                <Typography paragraph>

                </Typography>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
