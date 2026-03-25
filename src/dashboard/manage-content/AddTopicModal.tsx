import type { AddCategoryModalProp } from "@/types/category.type";
import MyEditor from "@/ui/MyEditor";
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
} from "@heroui/react";
import { useContext, useState } from "react";
import { ManageContext } from "./context/ManageContext";
import TestTable from "./TestTable";

export default function AddTopicModal({ isOpen, onOpenChange }: AddCategoryModalProp) {
    const [activeTab, setActiveTab] = useState("theory");
    const { onOpenAddQue, formik, categoryList, subcategoryList } = useContext(ManageContext)
    return (
        <>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                disableAnimation
                classNames={{
                    backdrop: "bg-[#32446740]",
                    base: "!my-auto"
                }}
                size="5xl"
                onClose={() => {
                    formik.resetForm()
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Create Topic</ModalHeader>
                            <ModalBody>
                                <div className="flex gap-x-2">
                                    <Select
                                        classNames={{
                                            base: "input-field-base ",
                                            trigger: " input-field-wrapper data-[invalid=true]:!bg-white group-data-[focus=true]:!bg-white !bg-white data-[hover=true]:!bg-white",
                                        }}
                                        placeholder="Select an category"
                                        aria-label="Select an category"
                                        id="category"
                                        {...formik.getFieldProps("category")}
                                        isInvalid={!!formik.errors.category && formik.touched.category}
                                        errorMessage={formik.touched.category && formik.errors.category}
                                        selectedKeys={[formik.values.category]}
                                    >
                                        {categoryList.map((item) => (
                                            <SelectItem key={item._id}>{item.name}</SelectItem>
                                        ))}
                                    </Select>
                                    <Select
                                        classNames={{
                                            base: "input-field-base",
                                            trigger: "input-field-wrapper data-[invalid=true]:!bg-white group-data-[focus=true]:!bg-white !bg-white data-[hover=true]:!bg-white",
                                        }}
                                        placeholder="Select an sub category"
                                        aria-label="Select an sub category"
                                        id="subCategory"
                                        {...formik.getFieldProps("subCategory")}
                                        isInvalid={!!formik.errors.subCategory && formik.touched.subCategory}
                                        errorMessage={formik.touched.subCategory && formik.errors.subCategory}
                                        selectedKeys={[formik.values.subCategory]}
                                    >
                                        {subcategoryList.map((item) => (
                                            <SelectItem key={item._id}>{item.name}</SelectItem>
                                        ))}
                                    </Select>
                                </div>
                                <Input
                                    aria-label="Topic Name"
                                    placeholder="Topic Name"
                                    type="text"
                                    classNames={{
                                        base: "input-field-base",
                                        inputWrapper: "input-field-wrapper data-[invalid=true]:!bg-white group-data-[focus=true]:!bg-white !bg-white data-[hover=true]:!bg-white",
                                        input: "input-field !text-black"
                                    }}
                                    id="topicName"
                                    {...formik.getFieldProps("topicName")}
                                    isInvalid={!!formik.errors.topicName && formik.touched.topicName}
                                    errorMessage={formik.touched.topicName && formik.errors.topicName}
                                />
                                <div className="topic-tab-wrapper">
                                    <button onClick={() => setActiveTab("theory")} className={`tab-btn ${activeTab === "theory" ? "active" : ""}`}>Theory</button>
                                    <button onClick={() => setActiveTab("test")} className={`tab-btn ${activeTab === "test" ? "active" : ""}`}>Test</button>
                                </div>
                                <div className="topic-input-wrapper">
                                    {
                                        activeTab === "theory" ?
                                            <div className="field">
                                                <div className="field-label">Theory</div>
                                                <MyEditor
                                                    value={formik.values.theory}
                                                    onChange={(value) => {
                                                        formik.setFieldValue("theory", value)
                                                    }}
                                                />
                                            </div>
                                            :
                                            <div className="field">
                                                <div className="flex justify-between mb-2">
                                                    <div className="field-label">Test</div>
                                                    <button onClick={onOpenAddQue} className="primary-btn h-8 max-w-28 text-sm">Add Question</button>
                                                </div>
                                                <TestTable />
                                            </div>
                                    }
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button className="primary-btn" color="primary" onPress={async () => {
                                    await formik.submitForm();
                                    onClose();
                                }}>
                                    {
                                        formik.values?.id ? "Update" : "create"
                                    }
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal >
        </>
    )
}
