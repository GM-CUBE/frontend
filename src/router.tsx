import Home from "@pages/Home";
import Arena from "@pages/arena/Arena";
import Learn from "@pages/Learn";
import Login from "@pages/Auth/Login";
import Signup from "@pages/Auth/Signup";
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
    },
    {
        path: "/learn",
        element: <Learn />
    }
])