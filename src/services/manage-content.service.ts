import axiosInstance from "@/config/axios-instance";

export const createTopic = (data: CreateTopicPayload) => {
    return axiosInstance.post(`/topic`, data);
}

export const updateTopic = (topicId: string, data: CreateTopicPayload) => {
    return axiosInstance.put(`/topic/${topicId}`, data);
}

export const getAllTopic = (category?: string, subcategory?: string) => {
    const params = new URLSearchParams;
    if (category) params.append("category", category);
    if (subcategory) params.append("subcategory", subcategory);
    const endpoint = params.toString() ? `/topic?${params.toString()}` : `/topic`;
    return axiosInstance.get(endpoint);
}

export const deleteTopic = (topicId: string) => {
    return axiosInstance.delete(`/topic/${topicId}`);
}

interface TopicQuestionsI {
    question: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    answer: string;
}

export interface CreateTopicPayload {
    categoryId: string;
    subcategoryId: string;
    topicName: string;
    description: string;
    questions: TopicQuestionsI[]
}