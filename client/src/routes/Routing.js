import Main from "../pages/Main";
import InfoProduct from "../pages/InfoProduct";
import React from "react";
import Admin from "../pages/Admin";
import PageError from "../pages/PageError";
import AdminTable from "../pages/AdminTable";

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
    element: <Admin/>
},]

export const privateRoutes = [{
    id: 1,
    path: "/admin",
    element: <AdminTable/>
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
}]