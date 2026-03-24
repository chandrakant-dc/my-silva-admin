import type { CategoryListI, SubCategoryListI } from "@/dashboard/hooks/useSubCategory";
import type { SubCategoryInitI } from "@/types/sub-category.type";
import type { FormikProps } from "formik";
import { createContext } from "react";

export interface SubCategoryContextI {
    formik: FormikProps<SubCategoryInitI>;
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: () => void;
    handleDelete: () => Promise<void>;
    categoryList: CategoryListI[];
    subcategoryList: SubCategoryListI[];
}

const initVal: SubCategoryContextI = {
    formik: {} as FormikProps<SubCategoryInitI>,
    isOpen: false,
    onOpen: () => { },
    onOpenChange: () => { },
    handleDelete: async () => { },
    categoryList: [],
    subcategoryList: []
}


export const SubCategoryContext = createContext<SubCategoryContextI>(initVal);