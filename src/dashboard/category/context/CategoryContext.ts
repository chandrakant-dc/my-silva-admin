import type { CategoryInitI } from "@/types/category.type";
import type { FormikProps } from "formik";
import { createContext } from "react";

export interface CategoryContextI {
    formik: FormikProps<CategoryInitI>;
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
}

const initVal: CategoryContextI = {
    formik: {} as FormikProps<CategoryInitI>,
    isOpen: false,
    onOpen: () => { },
    onOpenChange: () => { },
}

export const CategoryContext = createContext<CategoryContextI>(initVal);