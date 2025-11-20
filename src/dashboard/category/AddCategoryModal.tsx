import type { AddCategoryModalProp } from "@/types/category.type";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from "@heroui/react";
import { useContext } from "react";
import { CategoryContext } from "./context/CategoryContext";

export default function AddCategoryModal({ isOpen, onOpenChange }: AddCategoryModalProp) {
    const { formik } = useContext(CategoryContext);
    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                disableAnimation
                classNames={{
                    backdrop: "bg-[#32446740]"
                }}
                onClose={() => {
                    formik.resetForm();
                }}
            >
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Create Category</ModalHeader>
                            <ModalBody>
                                <Input
                                    aria-label="Category Name"
                                    placeholder="Category Name"
                                    type="text"
                                    classNames={{
                                        base: "input-field-base",
                                        inputWrapper: "input-field-wrapper data-[invalid=true]:!bg-white group-data-[focus=true]:!bg-white !bg-white data-[hover=true]:!bg-white",
                                        input: "input-field !text-black"
                                    }}
                                    {...formik.getFieldProps("category")}
                                    isInvalid={!!formik.errors.category && formik.touched.category}
                                    errorMessage={formik.touched.category && formik.errors.category}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button className="primary-btn" color="primary" onPress={formik.submitForm}>
                                    {formik.values.id ? "Update" : "Create"}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
