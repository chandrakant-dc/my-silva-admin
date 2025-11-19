import type { AddCategoryModalProp } from "@/types/category.type";
import MyEditor from "@/ui/MyEditor";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
} from "@heroui/react";
import TestTable from "./TestTable";
import { useState } from "react";

export default function AddTopicModal({ isOpen, onOpenChange }: AddCategoryModalProp) {
    const [activeTab, setActiveTab] = useState("theory")
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
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Create Topic</ModalHeader>
                            <ModalBody>
                                <Input
                                    aria-label="Topic Name"
                                    placeholder="Topic Name"
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
                                                    value={""}
                                                    onChange={(value) => {
                                                        console.log(value);
                                                        // form.setFieldValue("description", value)
                                                    }}
                                                />
                                            </div>
                                            :
                                            <div className="field">
                                                <div className="flex justify-between mb-2">
                                                    <div className="field-label">Test</div>
                                                    <button className="primary-btn h-8 max-w-28 text-sm">Add Question</button>
                                                </div>
                                                <TestTable />
                                            </div>
                                    }
                                </div>
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
