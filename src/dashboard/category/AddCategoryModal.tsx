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

export default function AddCategoryModal({ isOpen, onOpenChange }: AddCategoryModalProp) {
    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                disableAnimation
                classNames={{
                    backdrop:"bg-[#32446740]"
                }}
            >
                <ModalContent>
                    {(onClose) => (
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
                                // {...formik.getFieldProps("email")}
                                // isInvalid={!!formik.errors.email && formik.touched.email}
                                // errorMessage={formik.touched.email && formik.errors.email}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button className="primary-btn" color="primary" onPress={onClose}>
                                    Create
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
