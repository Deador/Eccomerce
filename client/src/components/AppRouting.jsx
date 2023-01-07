import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes/Routing";
import {useSelector} from "react-redux";

const AppRouting = () => {
    const auth = useSelector(state => state.inCart.auth)
    const user = useSelector(state => state.inCart.userSignIn);

    return (
        <BrowserRouter>
            <Routes>
                {auth && user.role === 'ADMIN' ? privateRoutes.map(rout => <Route path={rout.path} element={rout.element} key={rout.id}/>)
                    : publicRoutes.map(rout => <Route path={rout.path} element={rout.element} key={rout.id}/>)}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouting;