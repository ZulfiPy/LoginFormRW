import axios from "../api/axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios.get('/logout', {
                withCredentials: true
            });
            navigate('/login');
            console.log('logout successfully done', JSON.stringify(response));
        } catch (err) {
            console.log('error while logging out', err);
        }
    }

    return logout
}

export default useLogout;