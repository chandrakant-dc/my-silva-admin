import useCategory from "@/dashboard/hooks/useCategory";
import useManageContent from "@/dashboard/hooks/useManageContent";
import { ManageContext } from "./ManageContext";

export default function ManageContentProvider({ children }: { children: React.ReactNode }) {
    const {
        formik,
        currQueIdx,
        handleSetCurrQueIndex,
        handleDeleteQue,
        isOpenAddQue,
        onOpenAddQue,
        onOpenChangeAddQue,
        onCloseAddQue,
        QueFormik,
        subcategoryList,
        topicList,
        handleDeleteTopic,
        formikTopicFilter,
        subcategoryFilterList
    } = useManageContent();

    const { categoryList } = useCategory();
    return (
        <>
            <ManageContext.Provider value={{
                formik,
                currQueIdx,
                handleSetCurrQueIndex,
                handleDeleteQue,
                isOpenAddQue,
                onOpenAddQue,
                onOpenChangeAddQue,
                onCloseAddQue,
                QueFormik,
                subcategoryList,
                categoryList,
                topicList,
                handleDeleteTopic,
                formikTopicFilter,
                subcategoryFilterList
            }}>
                {children}
            </ManageContext.Provider>
        </>
    )
}
