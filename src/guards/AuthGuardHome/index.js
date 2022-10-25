import React from "react";
import { Navigate, Outlet } from 'react-router-dom';

import Account from "lib/account";

const AuthGuardHome = () => {
    const accessToken = Account.getAccessToken();

    if (accessToken) {
        return <Outlet />
    }

    return <Navigate to='/login' />
};

export default AuthGuardHome;