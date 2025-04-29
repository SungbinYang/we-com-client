import axios, {AxiosError, AxiosInstance} from "axios";
import {toast} from "react-toastify";

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

const setupBaseInterceptors = (instance: AxiosInstance): void => {
    /**
     * 요청 인터셉터
     */
    instance.interceptors.request.use(
        (config) => {
            // 필요한 경우 요청 전에 공통 설정을 적용합니다.
            return config;
        },
        (error: AxiosError) => {
            return Promise.reject(error);
        }
    );

    /**
     * 응답 인터셉터
     */
    instance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error: AxiosError) => {
            if (error.response) {
                const status = error.response.status;

                if (status === 401) {
                    toast.error('인증이 필요합니다.');
                }

                if (status === 403) {
                    toast.error('접근 권한이 없습니다.');
                }

                if (status >= 500) {
                    toast.error('서버 에러가 발생했습니다.');
                }
            } else if (error.request) {
                toast.error('서버로부터 응답이 없습니다.');

            } else {
                toast.error('요청 설정 중 에러가 발생했습니다.');
                console.error(error.message);
            }

            return Promise.reject(error);
        }
    );
};

setupBaseInterceptors(axiosInstance);

export default axiosInstance;