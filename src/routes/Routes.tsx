import { createBrowserRouter, RouteObject } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


export const router = createBrowserRouter([
    {
        path : '/',
        element: <Mainlayout />,
        children : [
            {
                path: '/',
                element : <Home />
            },
            {
                path : '/login',
                element : <Login />
            },
            {
                path: '/register',
                element: <Signup />
            }
        ]
    }
] as RouteObject[]
)

