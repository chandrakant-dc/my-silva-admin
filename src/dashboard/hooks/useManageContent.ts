import { questionAnswerSchema } from "@/schema/manage.schema";
import { getAllSubCategory } from "@/services/category.service";
import { createTopic, deleteTopic, getAllTopic, updateTopic, type CreateTopicPayload } from "@/services/manage-content.service";
import type { AddQuestionIniValI, TopicInitVal, topicQuestionsDetails } from "@/types/manage-content.type";
import { addToast, useDisclosure } from "@heroui/react";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

const initialValues: TopicInitVal = {
    topicQuestions: [],
    category: "",
    subCategory: "",
    topicName: "",
    theory: ""
}

const initialValuesQue: AddQuestionIniValI = {
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    answer: ""
}

const initialValuesFilter: TopicFilterI = {
    category: "",
    subcategory: ""
}


export default function useManageContent() {
    const [currQueIdx, setCurrQueIdx] = useState<number | null>(null);
    const { isOpen: isOpenAddQue, onOpen: onOpenAddQue, onOpenChange: onOpenChangeAddQue, onClose: onCloseAddQue } = useDisclosure();
    const [subcategoryList, setSubCategoryList] = useState<SubCategoryListI[]>([]);
    const [subcategoryFilterList, setSubCategoryFilterList] = useState<SubCategoryListI[]>([]);
    const [topicList, setTopicList] = useState<TopicListI[]>([]);

    const handleSetCurrQueIndex = (idx?: number) => {
        if (idx !== undefined) {
            setCurrQueIdx(idx);
        } else {
            setCurrQueIdx(null);
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit: async (val: TopicInitVal) => {
            const payload: CreateTopicPayload = {
                categoryId: val?.category,
                subcategoryId: val?.subCategory,
                topicName: val?.topicName,
                description: val?.theory,
                questions: val?.topicQuestions
            };
            if (val?.id) {
                const resp = await updateTopic(val?.id, payload);
                addToast({
                    title: resp?.data.message || "topic updated",
                    color: "success"
                });
            } else {
                const resp = await createTopic(payload);
                addToast({
                    title: resp?.data.message || "topic created",
                    color: "success"
                });
            }
            formik.resetForm();
            handleGetAllTopic();
        }
    });

    const QueFormik = useFormik({
        initialValues: initialValuesQue,
        validationSchema: questionAnswerSchema,
        onSubmit: handleAddQuestion
    })

    const formikTopicFilter = useFormik({
        initialValues: initialValuesFilter,
        onSubmit: handleFilterSubmit
    })

    async function handleFilterSubmit(val: TopicFilterI) {
        const resp = await getAllTopic(val?.category, val?.subcategory);
        setTopicList(resp?.data?.data || []);
    };


    function handleAddQuestion(val: AddQuestionIniValI) {
        if (currQueIdx !== null) {
            const arr = formik.values.topicQuestions;
            arr.splice(currQueIdx, 1, val);
            formik.setFieldValue("topicQuestions", arr);
            handleSetCurrQueIndex();
        } else {
            formik.setFieldValue("topicQuestions", [...formik.values.topicQuestions, val])
        }
        QueFormik.resetForm();
        if (onCloseAddQue)
            onCloseAddQue()
    }

    useEffect(() => {
        if (currQueIdx !== null) {
            const questionDetails = formik.values.topicQuestions[currQueIdx];
            if (questionDetails) {
                QueFormik.setValues(questionDetails);
            }
        }
    }, [currQueIdx])


    const handleDeleteQue = () => {
        const arr = formik.values.topicQuestions;
        if (currQueIdx !== null) {
            arr.splice(currQueIdx, 1);
        }
        formik.setFieldValue("topicQuestions", arr);
        setCurrQueIdx(null);
        QueFormik.resetForm();
    }

    useEffect(() => {
        const fetchSubCategory = async (categoryId: string) => {
            const resp = await getAllSubCategory(categoryId);
            setSubCategoryFilterList(resp?.data?.data || []);
        };
        if (formikTopicFilter.values.category) {
            fetchSubCategory(formikTopicFilter.values.category);
        }
    }, [formikTopicFilter.values.category])

    useEffect(() => {
        const fetchSubCategory = async (categoryId: string) => {
            const resp = await getAllSubCategory(categoryId);
            setSubCategoryList(resp?.data?.data || []);
        };
        if (formik.values.category) {
            fetchSubCategory(formik.values.category);
        }
    }, [formik.values.category])

    useEffect(() => {
        const fetchAllTopic = async () => {
            const resp = await getAllTopic();
            setTopicList(resp?.data?.data || []);
        }
        fetchAllTopic();
    }, [])

    async function handleGetAllTopic() {
        const resp = await getAllTopic();
        setTopicList(resp?.data?.data || []);
    }

    async function handleDeleteTopic() {
        if (formik.values?.id) {
            const resp = await deleteTopic(formik.values?.id);
            addToast({
                title: resp?.data.message || "topic deleted",
                color: "success"
            });
            handleGetAllTopic();
        }
    }

    function handleBulkUploadedData(data: topicQuestionsDetails[]) {
        const newData = formik.values.topicQuestions ? [...formik.values.topicQuestions, ...data] : data;
        formik.setFieldValue("topicQuestions", newData);
    }

    return {
        formik,
        currQueIdx,
        handleSetCurrQueIndex,
        handleDeleteQue,
        isOpenAddQue,
        onOpenAddQue,
        onOpenChangeAddQue,
        onCloseAddQue,
        QueFormik,
        handleFilterSubmit,
        subcategoryList,
        topicList,
        handleDeleteTopic,
        formikTopicFilter,
        subcategoryFilterList,
        handleBulkUploadedData
    }
}


export interface TopicFilterI {
    category: string;
    subcategory: string;
}

export interface SubCategoryListI {
    _id: string;
    name: string;
    category: string;
}

interface TopicQuestionsI {
    _id: string;
    topic: string;
    question: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    answer: string;
}

export interface TopicListI {
    _id: string;
    category: {
        _id: string;
        name: string;
    };
    subcategory: {
        _id: string;
        name: string;
    };
    topicName: string;
    description: string;
    questions: TopicQuestionsI[]
}