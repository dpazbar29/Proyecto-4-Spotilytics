import { createBrowserRouter } from "react-router-dom";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import UserProfile from "../pages/UserProfile";
import MainLayout from "../layouts/MainLayout";
import Songs from "../pages/Songs";
import Reproduction from "../pages/Reproduction";
import Genres from "../pages/Genres";
import Artists from "../pages/Artists";

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
            },
            {
                path:"/songs",
                element: <Songs />
            },
            {
                path:"/genres",
                element: <Genres />
            }
            ,{
                path:"/artists",
                element: <Artists />
            }
            ,{
                path:"/reproduction",
                element: <Reproduction />
            }
        ]

    }
])