
import {
    createBrowserRouter,
   } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import SingUp from "../pages/SingUp";

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
    },
    {
        path: "/login",
        element: <LoginPage></LoginPage>
    },
    {
        path: "/sign-up",
        element: <SingUp></SingUp>
    }
]);