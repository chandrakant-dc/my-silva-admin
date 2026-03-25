import AvailSeatIcon from "@/svg/AvailSeatIcon";
import CloseCircleOutlineIcon from "@/svg/CloseCircleOutlineIcon";
import DeleteIcon from "@/svg/DeleteIcon";
import EditRowIcon from "@/svg/EditRowIcon";
import DeleteModal from "@/ui/DeleteModal";
import { Select, SelectItem, useDisclosure } from "@heroui/react";
import { useContext } from "react";
import AddTopicModal from "./AddTopicModal";
import { ManageContext } from "./context/ManageContext";
import "./manage-content.css";

export default function ManageContent() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isOpenD, onOpen: onOpenD, onOpenChange: onOpenChangeD, onClose } = useDisclosure();
    const { formik, handleFilterSubmit, topicList, handleDeleteTopic } = useContext(ManageContext);
    return (
        <>
            <div className="p-4">
                <div className="flex items-center justify-between h-9">
                    <div className="text-xl font-semibold">Topic</div>
                </div>
                <div className="flex items-center gap-x-4">
                    <div className="whitespace-nowrap font-medium">Filter :</div>
                    <Select
                        classNames={{
                            base: "input-field-base",
                            trigger: "input-field-wrapper data-[invalid=true]:!bg-white group-data-[focus=true]:!bg-white !bg-white data-[hover=true]:!bg-white",
                        }}
                        placeholder="Select an category"
                        aria-label="Select an category"
                        id="category"
                        {...formik.getFieldProps("category")}
                        isInvalid={!!formik.errors.category && formik.touched.category}
                        errorMessage={formik.touched.category && formik.errors.category}
                        selectedKeys={[formik.values.category]}
                    >
                        {[{ key: "1", label: "1" }].map((item) => (
                            <SelectItem key={item.key}>{item.label}</SelectItem>
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
                        {[{ key: "1", label: "1" }].map((item) => (
                            <SelectItem key={item.key}>{item.label}</SelectItem>
                        ))}
                    </Select>
                    <button onClick={handleFilterSubmit} className="primary-btn max-w-28 h-10 text-sm">Submit</button>
                </div>
                <div className="flex items-center justify-end h-9">
                    <button onClick={onOpen} className="primary-btn max-w-28 h-full text-sm">Add New</button>
                </div>
                <div className="overflow-x-auto h-[calc(100vh-185px)] border rounded-lg mt-4">
                    <table className="min-w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left sticky top-0 bg-gray-100 z-10 w-12">
                                    S.No
                                </th>
                                <th className="px-4 py-2 text-left sticky top-0 bg-gray-100 z-10">
                                    Name
                                </th>
                                <th className="px-4 py-2 text-left sticky top-0 bg-gray-100 z-10">
                                    Theory
                                </th>
                                <th className="px-4 py-2 text-left sticky top-0 bg-gray-100 z-10">
                                    Test
                                </th>
                                <th className="px-4 py-2 sticky top-0 bg-gray-100 z-10 text-end">
                                    Action
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                topicList.map((item, i) => (
                                    <tr className="border-t" key={`topic-${i + 1}`}>
                                        <td className="px-4 py-2">{i + 1}</td>
                                        <td className="px-4 py-2">{item?.topicName}</td>
                                        <td className="px-4 py-2">
                                            {
                                                item?.description ?
                                                    <AvailSeatIcon />
                                                    :
                                                    <CloseCircleOutlineIcon />
                                            }
                                        </td>
                                        <td className="px-4 py-2">
                                            {
                                                item?.questions.length > 0 ?
                                                    <AvailSeatIcon />
                                                    :
                                                    <CloseCircleOutlineIcon />
                                            }
                                        </td>
                                        <td className="px-4 py-2">
                                            <div className="flex items-center justify-end gap-x-4">
                                                <button onClick={() => {
                                                    formik.setFieldValue("id", item?._id);
                                                    formik.setFieldValue("category", item?.category?._id);
                                                    formik.setFieldValue("subCategory", item?.subcategory?._id);
                                                    formik.setFieldValue("topicName", item?.topicName);
                                                    formik.setFieldValue("theory", item?.description);
                                                    formik.setFieldValue("topicQuestions", item?.questions);
                                                    onOpen();
                                                }}><EditRowIcon /></button>
                                                <button onClick={() => {
                                                    formik.setFieldValue("id", item?._id);
                                                    onOpenD()
                                                }}><DeleteIcon /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <AddTopicModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            />

            <DeleteModal
                isOpen={isOpenD}
                onOpenChange={onOpenChangeD}
                handleDelete={async () => {
                    handleDeleteTopic();
                    onClose();
                }}
                onClose={() => {
                    formik.resetForm();
                }}
            />
        </>
    )
}
