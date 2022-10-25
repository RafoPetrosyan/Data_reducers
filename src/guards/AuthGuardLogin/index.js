import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import Account from "lib/account";

const AuthGuardLogin = () => {
    const accessToken = Account.getAccessToken();

    if (accessToken) {
        return <Navigate to='/'/>
    }
    
    return <Outlet />
};

export default AuthGuardLogin;