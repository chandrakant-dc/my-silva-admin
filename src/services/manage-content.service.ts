import axiosInstance from "@/config/axios-instance";

export const createTopic = (data: CreateTopicPayload) => {
    return axiosInstance.post(`/topic`, data);
}

export const updateTopic = (topicId: string, data: CreateTopicPayload) => {
    return axiosInstance.put(`/topic/${topicId}`, data);
}

export const getAllTopic = () => {
    return axiosInstance.get(`/topic`);
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