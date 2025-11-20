import DeleteIcon from "@/svg/DeleteIcon";
import EditRowIcon from "@/svg/EditRowIcon";
import AddQuestionModal from "./AddQuestionModal";
import { useContext } from "react";
import { ManageContext } from "./context/ManageContext";
import DeleteModal from "@/ui/DeleteModal";
import { useDisclosure } from "@heroui/react";

export default function TestTable() {
    const { formik, handleSetCurrQueIndex, handleDeleteQue, onOpenAddQue, QueFormik } = useContext(ManageContext);
    const { isOpen: isOpenD, onOpen: onOpenD, onOpenChange: onOpenChangeD, onClose: onCloseD } = useDisclosure();

    return (
        <>
            <div className="overflow-x-auto h-[200px] border rounded-lg ">
                <table className="min-w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left sticky top-0 bg-gray-100 z-10 w-12">
                                S.No
                            </th>
                            <th className="px-4 py-2 text-left sticky top-0 bg-gray-100 z-10">
                                Question
                            </th>
                            <th className="px-4 py-2 text-left sticky top-0 bg-gray-100 z-10">
                                Correct Answer
                            </th>
                            <th className="px-4 py-2 sticky top-0 bg-gray-100 z-10 text-end">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            formik.values.topicQuestions.map(({ question, option1, option2, option3, option4, answer }, i) => {
                                return <tr className="border-t" key={i}>
                                    <td className="px-4 py-2">{i + 1}</td>
                                    <td className="px-4 py-2">
                                        <div className="text-[13px]">{question}</div>
                                        <div className="flex items-center gap-x-2">
                                            <span className="text-[13px] truncate max-w-[150px]">A. {option1}</span>
                                            <span className="text-[13px] truncate max-w-[150px]">B. {option2}</span>
                                            <span className="text-[13px] truncate max-w-[150px]">C. {option3}</span>
                                            <span className="text-[13px] truncate max-w-[150px]">D. {option4}</span>
                                        </div>
                                    </td>
                                    <td>{answerObject[answer as keyof typeof answerObject]}</td>
                                    <td className="px-4 py-2">
                                        <div className="flex items-center justify-end gap-x-4">
                                            <button onClick={() => {
                                                handleSetCurrQueIndex(i);
                                                onOpenAddQue();
                                            }}><EditRowIcon /></button>
                                            <button onClick={() => {
                                                handleSetCurrQueIndex(i);
                                                onOpenD()
                                            }}><DeleteIcon /></button>
                                        </div>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

            <AddQuestionModal />
            <DeleteModal
                isOpen={isOpenD}
                onOpenChange={onOpenChangeD}
                onClose={() => {
                    QueFormik.resetForm()
                    handleSetCurrQueIndex();
                }}
                handleDelete={() => {
                    handleDeleteQue();
                    onCloseD();
                }}
            />
        </>
    )
}


const answerObject = {
    option1: "A",
    option2: "B",
    option3: "C",
    option4: "D"
}