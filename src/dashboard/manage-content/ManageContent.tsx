import DeleteIcon from "@/svg/DeleteIcon";
import EditRowIcon from "@/svg/EditRowIcon";
import DeleteModal from "@/ui/DeleteModal";
import AddTopicModal from "./AddTopicModal";
import { Select, SelectItem, useDisclosure } from "@heroui/react";
import AvailSeatIcon from "@/svg/AvailSeatIcon";
import "./manage-content.css";
import { useContext } from "react";
import { ManageContext } from "./context/ManageContext";

export default function ManageContent() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isOpenD, onOpen: onOpenD, onOpenChange: onOpenChangeD } = useDisclosure();
    const { formik, handleFilterSubmit } = useContext(ManageContext);
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
                            <tr className="border-t">
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">demo</td>
                                <td className="px-4 py-2"><AvailSeatIcon /></td>
                                <td className="px-4 py-2"><AvailSeatIcon /></td>
                                <td className="px-4 py-2">
                                    <div className="flex items-center justify-end gap-x-4">
                                        <button onClick={onOpen}><EditRowIcon /></button>
                                        <button onClick={() => onOpenD()}><DeleteIcon /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">demo</td>
                                <td className="px-4 py-2"><AvailSeatIcon /></td>
                                <td className="px-4 py-2"><AvailSeatIcon /></td>
                                <td className="px-4 py-2">
                                    <div className="flex items-center justify-end gap-x-4">
                                        <button onClick={onOpen}><EditRowIcon /></button>
                                        <button onClick={() => onOpenD()}><DeleteIcon /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">demo</td>
                                <td className="px-4 py-2"><AvailSeatIcon /></td>
                                <td className="px-4 py-2"><AvailSeatIcon /></td>
                                <td className="px-4 py-2">
                                    <div className="flex items-center justify-end gap-x-4">
                                        <button onClick={onOpen}><EditRowIcon /></button>
                                        <button onClick={() => onOpenD()}><DeleteIcon /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-y">
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">demo</td>
                                <td className="px-4 py-2"><AvailSeatIcon /></td>
                                <td className="px-4 py-2"><AvailSeatIcon /></td>
                                <td className="px-4 py-2">
                                    <div className="flex items-center justify-end gap-x-4">
                                        <button onClick={onOpen}><EditRowIcon /></button>
                                        <button onClick={() => onOpenD()}><DeleteIcon /></button>
                                    </div>
                                </td>
                            </tr>
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
                handleDelete={() => ""}
            />
        </>
    )
}
