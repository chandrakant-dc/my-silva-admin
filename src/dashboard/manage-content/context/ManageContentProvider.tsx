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
        handleFilterSubmit
    } = useManageContent();
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
                handleFilterSubmit
            }}>
                {children}
            </ManageContext.Provider>
        </>
    )
}
