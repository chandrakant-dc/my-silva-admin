import { Modal, ModalContent, ModalBody, Input, Select, SelectItem, ModalFooter, Button } from "@heroui/react";
import { useContext } from "react";
import { ManageContext } from "./context/ManageContext";

export default function AddQuestionModal() {
    const { QueFormik: formik, isOpenAddQue, onOpenChangeAddQue, currQueIdx, handleSetCurrQueIndex } = useContext(ManageContext);
    return (
        <>
            <Modal
                isOpen={isOpenAddQue}
                onOpenChange={onOpenChangeAddQue}
                disableAnimation
                classNames={{
                    backdrop: "bg-[#32446740]",
                    base: "!my-auto"
                }}
                size="5xl"
                onClose={() => {
                    formik.resetForm();
                    handleSetCurrQueIndex();
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            {/* <ModalHeader className="flex items-center justify-between gap-1">
                                <div className="create-exam-title">BRONZE Exam 01</div>
                                <div className="create-exam-title">Participates: 100</div>
                            </ModalHeader> */}
                            <ModalBody>
                                <div className="create-modal-form pt-4">
                                    <Input
                                        label="Question"
                                        labelPlacement="outside"
                                        placeholder="Enter Question"
                                        type="text"
                                        classNames={{
                                            inputWrapper: "input-field",
                                            label: "label-text",
                                            base: "mb-10"
                                        }}
                                        id="question"
                                        name="question"
                                        value={formik.values.question}
                                        onChange={formik.handleChange}
                                    />
                                    <Input
                                        label="Option A"
                                        labelPlacement="outside"
                                        placeholder="Enter Option A"
                                        type="text"
                                        classNames={{
                                            inputWrapper: "input-field",
                                            label: "label-text",
                                            base: "mb-10"
                                        }}
                                        id="option1"
                                        name="option1"
                                        value={formik.values.option1}
                                        onChange={formik.handleChange}
                                    />
                                    <Input
                                        label="Option B"
                                        labelPlacement="outside"
                                        placeholder="Enter Option B"
                                        type="text"
                                        classNames={{
                                            inputWrapper: "input-field",
                                            label: "label-text",
                                            base: "mb-10"
                                        }}
                                        id="option2"
                                        name="option2"
                                        value={formik.values.option2}
                                        onChange={formik.handleChange}
                                    />
                                    <Input
                                        label="Option C"
                                        labelPlacement="outside"
                                        placeholder="Enter Option C"
                                        type="text"
                                        classNames={{
                                            inputWrapper: "input-field",
                                            label: "label-text",
                                            base: "mb-10"
                                        }}
                                        id="option3"
                                        name="option3"
                                        value={formik.values.option3}
                                        onChange={formik.handleChange}
                                    />
                                    <Input
                                        label="Option D"
                                        labelPlacement="outside"
                                        placeholder="Enter Option D"
                                        type="text"
                                        classNames={{
                                            inputWrapper: "input-field",
                                            label: "label-text",
                                            base: "mb-10"
                                        }}
                                        id="option4"
                                        name="option4"
                                        value={formik.values.option4}
                                        onChange={formik.handleChange}
                                    />
                                    <Select
                                        label="Correct Answer"
                                        labelPlacement="outside"
                                        aria-label="Correct Answer"
                                        classNames={{
                                            trigger: "input-field",
                                            label: "label-text text-[#11181c] !left-0 -translate-y-[calc(100%_+_theme(fontSize.small)/2_+_20px)]"
                                        }}
                                        placeholder="Select answer"
                                        id="answer"
                                        name="answer"
                                        selectedKeys={[formik.values.answer]}
                                        onChange={formik.handleChange}
                                    >
                                        {options.map((options) => (
                                            <SelectItem key={options.key}>{options.label}</SelectItem>
                                        ))}
                                    </Select>
                                </div>
                            </ModalBody>
                            <ModalFooter className="justify-center gap-x-4">
                                <Button className="rounded-lg border border-(--primary-color) text-(--primary-color) data-[hover=true]:bg-white hover:bg-white! px-8" color="danger" variant="light" onPress={() => {
                                    formik.resetForm();
                                    handleSetCurrQueIndex();
                                    onClose();
                                }}>
                                    Cancel
                                </Button>
                                <Button
                                    onPress={formik.submitForm}
                                    className="rounded-lg bg-(--primary-color) text-white py-2 px-8 " color="primary"
                                >
                                    {currQueIdx !== null ? "Update" : "Save"}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}


const options = [
    { key: "option1", label: "Option A" },
    { key: "option2", label: "Option B" },
    { key: "option3", label: "Option C" },
    { key: "option4", label: "Option D" },
]