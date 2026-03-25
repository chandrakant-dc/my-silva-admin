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
    Select,
    SelectItem,
    Textarea,
} from "@heroui/react";
import { useContext, useRef } from "react";
import { SubCategoryContext } from "./context/SubCategoryContext";

export default function AddSubCategoryModal({ isOpen, onOpenChange }: AddCategoryModalProp) {
    const { formik, categoryList } = useContext(SubCategoryContext);
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
                            <ModalHeader className="flex flex-col gap-1">Create Sub Category</ModalHeader>
                            <ModalBody>
                                <Select
                                    // className="max-w-xs"
                                    classNames={{
                                        base: "input-field-base",
                                        trigger: "input-field-wrapper data-[invalid=true]:!bg-white group-data-[focus=true]:!bg-white !bg-white data-[hover=true]:!bg-white",
                                        // input: "input-field !text-black"
                                    }}
                                    placeholder="Select an category"
                                    id="category"
                                    selectedKeys={[formik.values.category]}
                                    {...formik.getFieldProps("category")}
                                    isInvalid={!!formik.errors.category && formik.touched.category}
                                    errorMessage={formik.touched.category && formik.errors.category}
                                >
                                    {categoryList.map((item) => (
                                        <SelectItem key={item._id}>{item.name}</SelectItem>
                                    ))}
                                </Select>
                                <Input
                                    aria-label="Sub Category Name"
                                    placeholder="Sub Category Name"
                                    type="text"
                                    classNames={{
                                        base: "input-field-base",
                                        inputWrapper: "input-field-wrapper data-[invalid=true]:!bg-white group-data-[focus=true]:!bg-white !bg-white data-[hover=true]:!bg-white",
                                        input: "input-field !text-black placeholder:text-[13px]"
                                    }}
                                    {...formik.getFieldProps("subCategory")}
                                    isInvalid={!!formik.errors.subCategory && formik.touched.subCategory}
                                    errorMessage={formik.touched.subCategory && formik.errors.subCategory}
                                />
                                <Textarea
                                    aria-label="Description"
                                    placeholder="Description"
                                    type="text"
                                    classNames={{
                                        base: "input-field-base",
                                        inputWrapper: "input-field-wrapper data-[invalid=true]:!bg-white group-data-[focus=true]:!bg-white !bg-white data-[hover=true]:!bg-white",
                                        input: "input-field !text-black placeholder:text-[13px] pt-3"
                                    }}
                                    {...formik.getFieldProps("description")}
                                    isInvalid={!!formik.errors.description && formik.touched.description}
                                    errorMessage={formik.touched.description && formik.errors.description}
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
