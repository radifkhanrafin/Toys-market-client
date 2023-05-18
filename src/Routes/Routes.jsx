import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from '../App';
import Login from '../Pages/Login/Login';
import SignIn from '../Pages/SignIn/SignIn';
import Home from '../Pages/Home/Home';
import Add_toys from '../Pages/Add_toys/Add_toys';
const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signIn',
                element: <SignIn></SignIn>
            },
            {
                path:'/addtoy',
                element: <Add_toys></Add_toys>
            },
        ]
    },
]);

export default router;