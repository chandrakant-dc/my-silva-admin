import axiosInstance from "@/config/axios-instance";

export const createCategory = (data: FormData) => {
    return axiosInstance.post(`/category`, data, {
        headers: { "Content-Type": "multipart/form-data" },
    });
}

export const updateCategory = (data: FormData) => {
    return axiosInstance.put(`/category`, data, {
        headers: { "Content-Type": "multipart/form-data" },
    });
}

export const deleteCategory = (categoryId: string) => {
    return axiosInstance.delete(`/category/${categoryId}`);
}

export const getAllCategory = () => {
    return axiosInstance.get(`/category`);
}

// sub-category

export const createSubCategory = (data: FormData) => {
    return axiosInstance.post(`/subcategory`, data, {
        headers: { "Content-Type": "multipart/form-data" },
    });
}

export const updateSubCategory = (data: FormData) => {
    return axiosInstance.put(`/subcategory`, data, {
        headers: { "Content-Type": "multipart/form-data" },
    });
}

export const deleteSubCategory = (subcategoryId: string) => {
    return axiosInstance.delete(`/subcategory/${subcategoryId}`);
}

export const getAllSubCategory = (categoryId?: string) => {
    const endpoint = categoryId ? `/subcategory/all?categoryId=${categoryId}` : `/subcategory/all`;
    return axiosInstance.get(endpoint);
}