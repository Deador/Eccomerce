import React, {useContext, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AuthContext} from "../context/context";
import {privateRoutes, publicRoutes} from "../routes/Routing";

const AppRouting = () => {
    const {auth, setAuth} = useContext(AuthContext);
    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setAuth(true)
        }
    })
// localStorage.clear()
    return (
        <BrowserRouter>
            <Routes>
                {auth ? privateRoutes.map(rout => <Route path={rout.path} element={rout.element} key={rout.id}/>)
                    : publicRoutes.map(rout => <Route path={rout.path} element={rout.element} key={rout.id}/>)}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouting;