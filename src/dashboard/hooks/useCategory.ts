import type { CategoryInitI } from "@/types/category.type"
import { useDisclosure } from "@heroui/react";
import { useFormik } from "formik"

const initialValues: CategoryInitI = {
    category: "",
    id: ""
}

export default function useCategory() {
    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const formik = useFormik({
        initialValues,
        onSubmit: () => { onClose() }
    })

    return {
        formik,
        isOpen,
        onOpen,
        onOpenChange,
    }
}
