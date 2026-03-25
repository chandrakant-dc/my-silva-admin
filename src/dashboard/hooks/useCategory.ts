import { createCategory, deleteCategory, getAllCategory, updateCategory } from "@/services/category.service";
import type { CategoryInitI } from "@/types/category.type";
import { addToast, useDisclosure } from "@heroui/react";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

const initialValues: CategoryInitI = {
    category: "",
    id: "",
    image: ""
}

export default function useCategory() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
    const [categoryList, setCategoryList] = useState<CategoryListI[]>([]);

    const formik = useFormik({
        initialValues,
        onSubmit: async (val: CategoryInitI) => {
            const formData = new FormData();
            formData.append("name", val?.category);
            if (val?.image) formData.append("image", val.image);

            if (val?.id) {
                formData.append("id", val?.id);
                const resp = await updateCategory(formData);
                addToast({
                    title: resp?.data.message || "category updated",
                    color: "success"
                });
            } else {
                const resp = await createCategory(formData);
                addToast({
                    title: resp?.data.message || "category created",
                    color: "success"
                });
            }
            formik.resetForm();
            onClose()
            handleGetAllCategory();
        }
    });

    async function handleGetAllCategory() {
        const listResp = await getAllCategory();
        setCategoryList(listResp?.data?.data || []);
    }


    useEffect(() => {
        const fetchCategory = async () => {
            const resp = await getAllCategory();
            setCategoryList(resp?.data?.data || []);
        };

        fetchCategory();
    }, [])


    const handleDelete = async () => {
        const resp = await deleteCategory(formik.values.id);
        addToast({
            title: resp?.data.message || "category deleted",
            color: "success"
        });
        handleGetAllCategory();
    }

    return {
        formik,
        isOpen,
        onOpen,
        onOpenChange,
        handleDelete,
        categoryList
    }
}


export interface CategoryListI {
    name: string;
    _id: string;
    image: string;
}