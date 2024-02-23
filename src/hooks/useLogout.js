import axios from "../api/axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        try {
            const response = await axios.get('/logout', {
                withCredentials: true
            });
            setAuth({});
            console.log('logout successfully done', JSON.stringify(response));
        } catch (err) {
            console.log('error while logging out', err);
        }
    }

    return logout
}

export default useLogout;