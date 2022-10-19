import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const AuthGuardLogin = () => {
    if (localStorage.getItem('accessToken')) {
        return <Navigate to='/home'/>
    }
    
    return <Outlet />
};

export default AuthGuardLogin;