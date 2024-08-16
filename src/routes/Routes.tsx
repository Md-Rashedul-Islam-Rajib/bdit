import { createBrowserRouter, RouteObject } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";
import Login from "../pages/Login";


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
            }
        ]
    }
] as RouteObject[]
)

