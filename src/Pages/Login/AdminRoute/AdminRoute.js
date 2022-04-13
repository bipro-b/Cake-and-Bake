import { CircularProgress } from '@mui/material';
import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    const { user, isLoading, admin } = useAuth();
    let location = useLocation;
    if (isLoading) { return <CircularProgress /> }

    if (user.email && admin) {
        return children;
    }
    return <Navigate to={{ pathname: "/", state: { from: location } }} />

};

export default AdminRoute;