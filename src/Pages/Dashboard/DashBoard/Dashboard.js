import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Dashboard.css'
import {

    /* Switch,
    Route, */
    Link,


    NavLink,
    Route,
    Routes
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';
import Pay from '../Pay/Pay';
// import StudentReview from '../StudentReview/StudentReview';
// import MyEnroll from '../MyEnroll/MyEnroll';
// import AdminRoute from '../../Login/AdminRoute/AdminRoute';
// import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import AddCourse from '../Addcourse/AddCourse';
// import ManageCourses from '../ManageCourses/ManageCourses';
// import ManageEnroll from '../ManageEnroll/ManageEnroll';
// import Show from '../Show/Show';

import './Dashboard.css'
import MyOrder from '../MyOrder/MyOrder';
import AddProduct from '../AddProduct/AddProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageProduct from '../ManageProduct/ManageProduct';
// import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import GiveReview from '../GiveReview/GiveReview';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageOrder from '../ManageOrder/ManageOrder';

const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { admin, logout } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className='door'>
            <Toolbar />
            <Divider />
            <Link style={{ textDecoration: 'none' }} to="/dashboard"> <Button color="inherit">Dashboard</Button></Link> <br />
            <Box sx={{ textAlign: 'left' }}>
                <Link style={{ textDecoration: 'none' }} to="/home"> <Button color="inherit">Products</Button></Link> <br />


                {admin || <Box>
                    <Link style={{ textDecoration: 'none' }} to={`/dashboard/myorder`}> <Button color="inherit">My Order</Button></Link><br />
                    <NavLink style={{ textDecoration: 'none' }} to="givereview"> <Button color="inherit">Review</Button></NavLink><br />
                    <Link style={{ textDecoration: 'none' }} to={`/dashboard/pay`}> <Button color="inherit">Pay Now</Button></Link><br />
                    <br />
                    <Button onClick={logout} color="inherit">Logout</Button> <br />
                </Box>

                }
            </Box>

            {admin && <Box sx={{ textAlign: 'left' }}>
                <Link style={{ textDecoration: 'none' }} to="makeAdmin"> <Button color="inherit">Make Admin</Button></Link><br />
                <Link style={{ textDecoration: 'none' }} to={`/dashboard/manageallorder`}> <Button color="inherit">Manage Order</Button></Link><br />
                <Link style={{ textDecoration: 'none' }} to={`/dashboard/manageproduct`}> <Button color="inherit">Manage Products</Button></Link><br />
                <Link style={{ textDecoration: 'none' }} to={`/dashboard/addproduct`}> <Button color="inherit">Add Product</Button></Link> <br />
                <Button onClick={logout} sx={{ color: 'white' }}>Logout</Button>
            </Box>}


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }} className='dash'>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.812)',
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
                    <Typography sx={{ textAlign: 'center' }} variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                    <Typography variant="h6" noWrap component="div">
                        <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button color="inherit">Home</Button></NavLink>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                    {drawer}s
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

                <Routes>

                    <Route path="givereview" element={<GiveReview />}>

                    </Route>
                    <Route path="pay" element={<Pay />} />


                    <Route path="myorder" element={<MyOrder />} />


                    <Route path="addproduct" element={<AddProduct />} />
                    <Route path="makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />

                    <Route path="manageproduct" element={<ManageProduct />} />

                    <Route path="manageallorder" element={<ManageOrder />} />


                </Routes>

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
