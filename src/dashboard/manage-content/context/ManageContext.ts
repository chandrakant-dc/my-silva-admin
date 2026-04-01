import type { CategoryListI } from "@/dashboard/hooks/useCategory";
import type { SubCategoryListI, TopicFilterI, TopicListI } from "@/dashboard/hooks/useManageContent";
import type { AddQuestionIniValI, TopicInitVal, topicQuestionsDetails } from "@/types/manage-content.type";
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
    subcategoryList: SubCategoryListI[],
    categoryList: CategoryListI[],
    topicList: TopicListI[],
    handleDeleteTopic: () => Promise<void>,
    formikTopicFilter: FormikProps<TopicFilterI>,
    subcategoryFilterList: SubCategoryListI[];
    handleBulkUploadedData(data: topicQuestionsDetails[]): void
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
    subcategoryList: [],
    categoryList: [],
    topicList: [],
    handleDeleteTopic: async () => { },
    formikTopicFilter: {} as FormikProps<TopicFilterI>,
    subcategoryFilterList: [],
    handleBulkUploadedData: () => { }
}

export const ManageContext = createContext<ManageContextI>(initVal);