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
import My_toys from '../Pages/My_toys/My_toys';
import Blog from '../Pages/Blog/Blog';
import All_toys from '../Pages/All_Toys/All_toys';
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
            {
                path:'/mytoys',
                element: <My_toys></My_toys>
            },
            {
                path:'/allToys',
                element: <All_toys></All_toys>
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            },
        ]
    },
]);

export default router;