import { useRoutes } from "react-router-dom";
import RequireAuth from "../auth/RequireAuth";
import RequireRole from "../auth/RequireRole";

import Admin from "../pages/Admin";
import Forbidden from "../pages/Forbidden";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import TodoList from "../pages/TodoList";

export default function AppRoutes() {
    return useRoutes([
        { path: "/", element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/403", element: <Forbidden /> },

        {
            element: <RequireAuth />,
            children: [
                { path: "/todos", element: <TodoList /> },

                {
                    element: <RequireRole roles={["admin"]} />,
                    children: [{ path: "/admin", element: <Admin /> }],
                },
            ],
        },

        { path: "*", element: <NotFound /> },
    ]);
}
