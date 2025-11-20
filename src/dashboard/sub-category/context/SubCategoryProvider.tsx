import useSubCategory from "@/dashboard/hooks/useSubCategory";
import { SubCategoryContext } from "./SubCategoryContext";

export default function SubCategoryProvider({ children }: { children: React.ReactNode }) {
    const {
        formik,
        isOpen,
        onOpen,
        onOpenChange,
        handleDelete
    } = useSubCategory();
    return (
        <>
            <SubCategoryContext.Provider value={{
                formik,
                isOpen,
                onOpen,
                onOpenChange,
                handleDelete
            }}>
                {children}
            </SubCategoryContext.Provider>
        </>
    )
}
