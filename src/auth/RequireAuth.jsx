import { Navigate, Outlet, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useAuth } from "./useAuth";

export default function RequireAuth() {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) return <Spinner />;

    if (!user) {
        return (
            <Navigate
                to="/login"
                replace
                state={{ from: location.pathname }}
            />
        );
    }

    return <Outlet />;
}
