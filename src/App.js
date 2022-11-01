import React from "react";
import {Route, Routes} from "react-router-dom";

import AuthGuardLogin from "guards/AuthGuardLogin";
import AuthGuardHome from "guards/AuthGuardHome";

import SignIn from "views/pages/SignIn";
import Home from "views/pages/Home";
import ModalRoot from "views/pages/ModalRoot/container";

const App = () => (
    <>
        <Routes>
            <Route path="/login" element={<AuthGuardLogin/>} >
                <Route path="" element={<SignIn/>} />
            </Route>

            <Route path="/" element={<AuthGuardHome/>} >
                <Route path='' element={<Home/>} />
            </Route>
        </Routes>
        <ModalRoot />
    </>
);

export default App;
