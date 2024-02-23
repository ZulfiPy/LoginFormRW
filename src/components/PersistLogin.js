import { useQuery } from "react-query";
import axios from "../api/axios";
import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const fetchRefreshToken = async () => {
    const { data } = await axios.get('/refresh', { withCredentials: true });
    return data;
}

const PersistLogin = () => {
    const { persist, auth, setAuth } = useAuth();

        const { isLoading } = useQuery('refreshToken', fetchRefreshToken, {
            enabled: !auth?.accessToken && persist && document.visibilityState === 'visible',
            onSuccess: (data) => {
                setAuth((prev) => ({ ...prev, accessToken: data.accessToken }));
            },
            retry: false,
        });

        return (
            <>
                {!persist
                    ? <Outlet />
                    : isLoading
                        ? <p>Loading...</p>
                        : <Outlet />
                }
            </>
        )
    
}

export default PersistLogin;

