import { useEffect } from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
    const { auth, setAuth } = useAuth();
    const token = auth?.accessToken;
    const location = useLocation();

    const decoded = token
        ? jwtDecode(token)
        : undefined

    const username = decoded?.UserInfo?.username;
    const roles = decoded?.UserInfo?.roles || [];

    useEffect(() => {
        if (username) {
            setAuth(prev => ({ ...prev, roles, username }));
        }
    }, [token]);

    return (
        roles.some(role => allowedRoles.includes(role))
            ? <Outlet />
            : auth?.accessToken
                ? <Navigate to="/unauthorized" state={{ state: location }} replace />
                : <Navigate to="/login" state={{ state: location }} replace />
    )
}

export default RequireAuth;