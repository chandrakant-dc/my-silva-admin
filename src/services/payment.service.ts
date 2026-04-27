
import axiosInstance from "@/config/axios-instance";

export const getAllUserSubscriptions = () => {
    return axiosInstance.get(`/user-subscription/list`);
}

export const paymentAction = async (data?: { comment: string, type: string, id: string }) => {
    return axiosInstance.patch(`/user-subscription/subscription/approve/${data?.id}`, data);
}