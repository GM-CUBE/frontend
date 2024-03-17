import Home from "@pages/Home";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import Learn from "@pages/Learn";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
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