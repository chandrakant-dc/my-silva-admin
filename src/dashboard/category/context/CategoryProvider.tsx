import useCategory from "@/dashboard/hooks/useCategory";
import { CategoryContext } from "./CategoryContext";

export default function CategoryProvider({ children }: { children: React.ReactNode }) {
    const {
        formik,
        isOpen,
        onOpen,
        onOpenChange,
        handleDelete
    } = useCategory();
    return (
        <>
            <CategoryContext.Provider value={{
                formik,
                isOpen,
                onOpen,
                onOpenChange,
                handleDelete
            }}>
                {children}
            </CategoryContext.Provider>
        </>
    )
}
