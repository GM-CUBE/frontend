import Home from "@pages/Home";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import Arena from "@pages/arena/Arena";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/play",
        element: <Arena />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    }
])