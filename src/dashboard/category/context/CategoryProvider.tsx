import useCategory from "@/dashboard/hooks/useCategory";
import { CategoryContext } from "./CategoryContext";

export default function CategoryProvider({ children }: { children: React.ReactNode }) {
    const {
        formik,
        isOpen,
        onOpen,
        onOpenChange,
    } = useCategory();
    return (
        <>
            <CategoryContext.Provider value={{
                formik,
                isOpen,
                onOpen,
                onOpenChange,
            }}>
                {children}
            </CategoryContext.Provider>
        </>
    )
}
