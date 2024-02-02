
import {
    createBrowserRouter,
   } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";

export const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            }
        ]
    }
]);