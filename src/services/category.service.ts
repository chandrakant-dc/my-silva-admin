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

// sub-category

export const createSubCategory = (data: { name: string, categoryId: string }) => {
    return axiosInstance.post(`/subcategory`, data);
}

export const updateSubCategory = (data: { id: string, name: string, categoryId: string }) => {
    return axiosInstance.put(`/subcategory`, data);
}

export const deleteSubCategory = (subcategoryId: string) => {
    return axiosInstance.delete(`/subcategory/${subcategoryId}`);
}

export const getAllSubCategory = (categoryId?: string) => {
    const endpoint = categoryId ? `/subcategory/${categoryId}` : `/subcategory`;
    return axiosInstance.get(endpoint);
}