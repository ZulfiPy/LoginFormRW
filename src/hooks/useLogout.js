import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios.get('/logout', {
                withCredentials: true
            });
            console.log('logout successfully done', JSON.stringify(response));
        } catch (err) {
            console.log('error while logging out', err);
        }
    }

    return logout
}

export default useLogout;