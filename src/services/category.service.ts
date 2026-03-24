import axiosInstance from "@/config/axios-instance";

export const createCategory = (data: { name: string }) => {
    return axiosInstance.post(`/category`, data);
}

export const updateCategory = (data: { name: string, id: string }) => {
    return axiosInstance.put(`/category`, data);
}

export const deleteCategory = (categoryId: string) => {
    return axiosInstance.delete(`/category/${categoryId}`);
}

export const getAllCategory = () => {
    return axiosInstance.get(`/category`);
}