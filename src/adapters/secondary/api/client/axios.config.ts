import axios, {AxiosInstance} from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance: AxiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/hal+json',
    },
    withCredentials: true,
});

export default axiosInstance;