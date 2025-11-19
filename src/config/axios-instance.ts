import { addToast } from "@heroui/react";
import axios from "axios";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import Cookies from "js-cookie";
// import { toast } from "react-toastify";

export type ErrObject = Record<string, string>;

export interface ErrResp {
    response: {
        data: {
            data: { [key: string]: string };
            message: string;
            success: boolean;
        };
        status: number;
    };
}

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL + `/api/v1`,
    headers: {
        "Content-Type": "application/json",
    },
    // timeout: 10000,
});


axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = Cookies.get("sitkn");
        if (token) {
            config.headers = config.headers || {};
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error: ErrResp) => {
        if (!error.response) {
            console.error("Network error:", error);
            return Promise.reject(new Error("Network error. Please try again later."));
        }

        const { status, data } = error.response;

        switch (status) {
            case 400:
                console.warn("Validation error:", data?.message);
                addToast({
                    title: data?.message || "Validation error",
                    color: "danger"
                })
                // toast.error(data?.message || "Validation error")
                break;
            case 401:
                console.warn("Unauthorized. Token might be expired.");
                Cookies.remove("sitkn");
                // Optionally redirect to login page
                // window.location.href = "/login";
                break;
            case 403:
                console.error("Forbidden. No access.");
                addToast({
                    title: data?.message || "Forbidden. No access.",
                    color: "danger"
                })
                // toast.error(data?.message || "Forbidden. No access.")
                break;
            case 404:
                console.error("Resource not found:", data?.message);
                addToast({
                    title: data?.message || "Resource not found",
                    color: "danger"
                })
                // toast.error(data?.message || "Resource not found")
                break;
            case 500:
                console.error("Server error:", data?.message);
                addToast({
                    title: data?.message || "Server error",
                    color: "danger"
                })
                // toast.error(data?.message || "Server error")
                break;
            default:
                console.error("Unknown error:", data?.message || error);
                addToast({
                    title: data?.message || "Unknown error",
                    color: "danger"
                })
            // toast.error(data?.message || "Unknown error")
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
