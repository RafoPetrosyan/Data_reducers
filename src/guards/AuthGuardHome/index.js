import React from "react";
import { Navigate, Outlet } from 'react-router-dom';

const AdminGuardHome = () => {
    if (localStorage.getItem('accessToken')) {
        return <Outlet />
    }

    return <Navigate to='login' />
};

export default AdminGuardHome;