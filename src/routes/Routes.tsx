import { createBrowserRouter, RouteObject } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import Home from "../pages/Home";


export const router = createBrowserRouter([
    {
        path : '/',
        element: <Mainlayout />,
        children : [
            {
                path: '/',
                element : <Home />
            }
        ]
    }
] as RouteObject[]
)

