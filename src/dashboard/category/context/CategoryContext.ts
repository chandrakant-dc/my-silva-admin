import type { CategoryListI } from "@/dashboard/hooks/useCategory";
import type { CategoryInitI } from "@/types/category.type";
import type { FormikProps } from "formik";
import { createContext } from "react";

export interface CategoryContextI {
    formik: FormikProps<CategoryInitI>;
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
    handleDelete: () => Promise<void>;
    categoryList: CategoryListI[];
}

const initVal: CategoryContextI = {
    formik: {} as FormikProps<CategoryInitI>,
    isOpen: false,
    onOpen: () => { },
    onOpenChange: () => { },
    handleDelete: async () => { },
    categoryList: []
}

export const CategoryContext = createContext<CategoryContextI>(initVal);