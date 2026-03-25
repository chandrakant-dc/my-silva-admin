import { createSubCategory, deleteSubCategory, getAllCategory, getAllSubCategory, updateSubCategory } from "@/services/category.service";
import type { SubCategoryInitI } from "@/types/sub-category.type";
import { addToast, useDisclosure } from "@heroui/react";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

const initialValues: SubCategoryInitI = {
    id: "",
    category: "",
    subCategory: "",
    description: "",
    image: null
}

export default function useSubCategory() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [categoryList, setCategoryList] = useState<CategoryListI[]>([]);
    const [subcategoryList, setSubCategoryList] = useState<SubCategoryListI[]>([]);

    const formik = useFormik({
        initialValues,
        onSubmit: async (val: SubCategoryInitI) => {
            const formData = new FormData();
            formData.append("name", val?.subCategory);
            formData.append("categoryId", val?.category);
            formData.append("description", val?.description);
            if (val?.image) formData.append("image", val?.image);
            if (val?.id) {
                formData.append("id", val?.id);
                const resp = await updateSubCategory(formData);
                addToast({
                    title: resp?.data.message || "subcategory updated",
                    color: "success"
                });
            } else {
                const resp = await createSubCategory(formData);
                addToast({
                    title: resp?.data.message || "subcategory created",
                    color: "success"
                });
            }
            formik.resetForm();
            onClose();
            handleGetAllCategory();
        }
    })

    async function handleGetAllCategory() {
        const listResp = await getAllSubCategory();
        setSubCategoryList(listResp?.data?.data || []);
    }

    const handleDelete = async () => {
        const resp = await deleteSubCategory(formik.values.id);
        addToast({
            title: resp?.data.message || "subcategory deleted",
            color: "success"
        });
        handleGetAllCategory();
    }

    useEffect(() => {
        const fetchCategory = async () => {
            const resp = await getAllCategory();
            setCategoryList(resp?.data?.data || []);
        };

        fetchCategory();
    }, [])

    useEffect(() => {
        const fetchSubCategory = async () => {
            const resp = await getAllSubCategory();
            setSubCategoryList(resp?.data?.data || []);
        };

        fetchSubCategory();
    }, [])


    return {
        formik,
        isOpen,
        onOpen,
        onOpenChange,
        handleDelete,
        categoryList,
        subcategoryList
    }
}

export interface CategoryListI {
    name: string;
    _id: string;
}

export interface SubCategoryListI {
    _id: string;
    name: string;
    category: {
        _id: string;
        name: string;
    },
    description: string;
    image: string;
}