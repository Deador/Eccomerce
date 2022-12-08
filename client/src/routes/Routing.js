import Main from "../pages/Main";
import InfoProduct from "../pages/InfoProduct";
import React from "react";
import AuthAdmin from "../pages/AuthAdmin";
import PageError from "../pages/PageError";
import AdminProduct from "../pages/AdminProduct";
import AdminType from "../pages/AdminType";
import Cart from "../pages/Cart";
import AuthClient from "../pages/AuthClient";

export const publicRoutes = [{
    id: 1,
    path: "/",
    element: <Main/>
}, {
    id: 2,
    path: "products/:id",
    element: <InfoProduct/>
}, {
    id: 3,
    path: "*",
    element: <PageError/>
}, {
    id: 4,
    path: "/admin",
    element: <AuthAdmin/>
}, {
    id: 5,
    path: "/cart",
    element: <Cart/>
}, {
    id: 6,
    path: "/login",
    element: <AuthClient/>
}]

export const privateRoutes = [{
    id: 1,
    path: "/admin",
    element: <AdminProduct/>
}, {
    id: 2,
    path: "*",
    element: <PageError/>
}, {
    id: 3,
    path: "/",
    element: <Main/>
}, {
    id: 4,
    path: "products/:id",
    element: <InfoProduct/>
},
    {
        id: 5,
        path: "/types",
        element: <AdminType/>
    }, {
        id: 6,
        path: "/cart",
        element: <Cart/>
    },
    {
        id: 7,
        path: "/login",
        element: <AuthClient/>
    }
]