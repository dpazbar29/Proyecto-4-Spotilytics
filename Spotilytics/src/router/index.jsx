import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import UserProfile from "../pages/UserProfile";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter ([
    {
        path:"/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                //path:"/"
                index:true,
                element: <Home />,
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/login",
                element: <Login />
            },
            {
                path:"/profile",
                element: <UserProfile />
            }
        ]

    }
])