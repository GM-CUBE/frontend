import Home from "@pages/Home";
import Arena from "@pages/arena/Arena";
import Learn from "@pages/lessons/Learn";
import Login from "@pages/Auth/Login";
import Signup from "@pages/Auth/Signup";
import Exercise from "@pages/lessons/Exercise"
import { createBrowserRouter } from "react-router-dom";
import Match from "@pages/arena/Match";

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
        path: "/play/match",
        element: <Match />
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
    },
    {
        path: "/exercise/:level_id",
        element: <Exercise />  
    }
])