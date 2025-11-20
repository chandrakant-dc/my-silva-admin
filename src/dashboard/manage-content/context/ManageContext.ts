import type { AddQuestionIniValI, TopicInitVal } from "@/types/manage-content.type";
import type { FormikProps } from "formik";
import { createContext } from "react";

export interface ManageContextI {
    formik: FormikProps<TopicInitVal>,
    currQueIdx: number | null,
    handleSetCurrQueIndex: (i?: number) => void,
    handleDeleteQue: () => void,
    isOpenAddQue: boolean,
    onOpenAddQue: () => void,
    onOpenChangeAddQue: () => void,
    onCloseAddQue: () => void,
    QueFormik: FormikProps<AddQuestionIniValI>,
}

const initVal: ManageContextI = {
    formik: {} as FormikProps<TopicInitVal>,
    QueFormik: {} as FormikProps<AddQuestionIniValI>,
    currQueIdx: null,
    handleSetCurrQueIndex: () => { },
    handleDeleteQue: () => { },
    isOpenAddQue: false,
    onOpenAddQue: () => { },
    onOpenChangeAddQue: () => { },
    onCloseAddQue: () => { },
}

export const ManageContext = createContext<ManageContextI>(initVal);