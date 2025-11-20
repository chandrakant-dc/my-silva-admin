import type { AddQuestionIniValI, TopicInitVal } from "@/types/manage-content.type"
import { useDisclosure } from "@heroui/react";
import { useFormik } from "formik"
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


export default function useManageContent() {
    const [currQueIdx, setCurrQueIdx] = useState<number | null>(null);
    const { isOpen: isOpenAddQue, onOpen: onOpenAddQue, onOpenChange: onOpenChangeAddQue, onClose: onCloseAddQue } = useDisclosure();

    const handleSetCurrQueIndex = (idx?: number) => {
        if (idx !== undefined) {
            setCurrQueIdx(idx);
        } else {
            setCurrQueIdx(null);
        }
    }

    const formik = useFormik({
        initialValues,
        onSubmit: () => { }
    });

    const QueFormik = useFormik({
        initialValues: initialValuesQue,
        onSubmit: handleAddQuestion
    })

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

    const handleFilterSubmit = () => { }

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
        handleFilterSubmit
    }
}
