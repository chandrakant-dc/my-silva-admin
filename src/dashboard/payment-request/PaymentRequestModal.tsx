import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Radio,
    RadioGroup,
    Textarea
} from "@heroui/react";
import { useContext } from "react";
import { PaymentContext } from "./context/PaymentContext";

export default function PaymentRequestModal({
    isOpen,
    onOpenChange
}: PaymentRequestModalProp) {
    const { formik } = useContext(PaymentContext);
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
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Payment Action</ModalHeader>
                            <ModalBody>
                                <div>
                                    <Textarea
                                        aria-label="Comment"
                                        label="Comment (optional)"
                                        labelPlacement="outside-top"
                                        placeholder="Comment"
                                        type="text"
                                        classNames={{
                                            base: "input-field-base",
                                            inputWrapper: "input-field-wrapper data-[invalid=true]:!bg-white group-data-[focus=true]:!bg-white !bg-white data-[hover=true]:!bg-white",
                                            input: "input-field !text-black pt-2"
                                        }}
                                        {...formik.getFieldProps("comment")}
                                        isInvalid={!!formik.errors.comment && formik.touched.comment}
                                        errorMessage={formik.touched.comment && formik.errors.comment}
                                    />
                                    <RadioGroup
                                        aria-label="Select your status"
                                        size="sm"
                                        {...formik.getFieldProps("type")}
                                        isInvalid={!!formik.errors.type && formik.touched.type}
                                        errorMessage={formik.touched.type && formik.errors.type}
                                    >
                                        <Radio value="approve">Approve</Radio>
                                        <Radio value="reject">Reject</Radio>
                                    </RadioGroup>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button className="primary-btn" color="primary" onPress={async () => {
                                    await formik.submitForm();
                                    onClose();
                                }}>
                                    Submit
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

interface PaymentRequestModalProp {
    isOpen: boolean;
    onOpenChange: () => void;
}