import axiosInstance from "@/config/axios-instance";

export const checkAuthUser = () => {
    return axiosInstance.get(`/dummy-endpoint/verify-token`);
}