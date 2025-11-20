import type { SubCategoryInitI } from "@/types/sub-category.type"
import { useDisclosure } from "@heroui/react";
import { useFormik } from "formik"

const initialValues: SubCategoryInitI = {
    id: "",
    category: "",
    subCategory: ""
}

export default function useSubCategory() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const formik = useFormik({
        initialValues,
        onSubmit: () => { onClose() }
    })

    const handleDelete = () => { }

    return {
        formik,
        isOpen,
        onOpen,
        onOpenChange,
        handleDelete
    }
}
