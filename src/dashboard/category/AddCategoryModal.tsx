import CancelCircleIcon from "@/svg/CancelCircleIcon";
import type { AddCategoryModalProp } from "@/types/category.type";
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@heroui/react";
import { useContext, useRef } from "react";
import { CategoryContext } from "./context/CategoryContext";

export default function AddCategoryModal({ isOpen, onOpenChange }: AddCategoryModalProp) {
    const { formik } = useContext(CategoryContext);
    const imageRef = useRef<HTMLInputElement>(null);
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
                                <button
                                    type="button"
                                    onClick={() => imageRef.current?.click()}
                                    className="text-[14px] border border-[#dfdfe4] rounded-lg h-10.5 w-full mb-3 mt-2"
                                >
                                    Choose Image File
                                </button>
                                <input
                                    ref={imageRef}
                                    aria-label="image"
                                    type="file"
                                    name="image"
                                    accept="image/png, image/jpeg, image/jpg, image/webp"
                                    hidden
                                    className="input-field-base input-field-wrapper1 text-[14px] input-field text-black"
                                    onChange={(event) => {
                                        const file = event.currentTarget.files?.[0];

                                        if (!file) return;

                                        const validTypes = [
                                            "image/png",
                                            "image/jpeg",
                                            "image/jpg",
                                            "image/webp",
                                        ];

                                        if (!validTypes.includes(file.type)) {
                                            formik.setFieldError(
                                                "image",
                                                "Only PNG, JPG, JPEG, WEBP images are allowed"
                                            );
                                            formik.setFieldTouched("image", true);
                                            return;
                                        }

                                        formik.setFieldValue("image", file);
                                    }}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.image && formik.errors.image && (
                                    <p className="text-danger text-[12px]">
                                        {formik.errors.image}
                                    </p>
                                )}
                                {formik.values.image && (
                                    <div className="mb-4 flex items-center gap-x-2">
                                        <div className="text-[14px] text-(--primary-color) break-all">
                                            {typeof formik.values.image === "string"
                                                ? formik.values.image
                                                : formik.values.image.name}
                                        </div>

                                        <button
                                            type="button"
                                            className="text-[14px] text-red-500 [&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg]:fill-red-600"
                                            onClick={() => {
                                                formik.setFieldValue("image", null);
                                            }}
                                        >
                                            <CancelCircleIcon />
                                        </button>
                                    </div>
                                )}
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
