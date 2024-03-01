import { axiosPrivate } from "../api/axios";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    axiosPrivate.interceptors.request.use(
        (config) => {
            if (!config.headers['Authorization']) {
                config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
            }
            return config;
        }, (error) => Promise.reject(error)
    )

    axiosPrivate.interceptors.response.use(
        (response) => {
            return response
        }, async (error) => {
            const prevRequest = error?.config
            if (error.response.status === 403 && !prevRequest.sent) {
                console.log(error.response.status)
                prevRequest.sent = true
                const newAccessToken = await refresh();
                console.log(newAccessToken)
                prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                return axiosPrivate(prevRequest);
            }
            return Promise.reject(error);
        }
    )

    return axiosPrivate;
 }

 export default useAxiosPrivate