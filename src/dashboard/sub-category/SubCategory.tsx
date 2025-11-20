import DeleteIcon from "@/svg/DeleteIcon";
import EditRowIcon from "@/svg/EditRowIcon";
import DeleteModal from "@/ui/DeleteModal";
import { useDisclosure } from "@heroui/react";
import AddSubCategoryModal from "./AddSubCategoryModal";
import { useContext } from "react";
import { SubCategoryContext } from "./context/SubCategoryContext";

export default function SubCategory() {
    const { isOpen: isOpenD, onOpen: onOpenD, onOpenChange: onOpenChangeD } = useDisclosure();
    const { formik, isOpen, onOpenChange, onOpen, handleDelete } = useContext(SubCategoryContext);

    return (
        <>
            <div className="p-4">
                <div className="flex items-center justify-between h-9">
                    <div className="text-xl font-semibold">Sub Category</div>
                    <button onClick={onOpen} className="primary-btn max-w-28 h-full text-sm">Add New</button>
                </div>
                <div className="overflow-x-auto h-[calc(100vh-85px)] border rounded-lg mt-4">
                    <table className="min-w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left sticky top-0 bg-gray-100 z-10 w-12">
                                    S.No
                                </th>
                                <th className="px-4 py-2 text-left sticky top-0 bg-gray-100 z-10">
                                    Category
                                </th>
                                <th className="px-4 py-2 text-left sticky top-0 bg-gray-100 z-10">
                                    Sub Category
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
                                <td className="px-4 py-2">demo</td>
                                <td className="px-4 py-2">
                                    <div className="flex items-center justify-end gap-x-4">
                                        <button onClick={() => {
                                            formik.setFieldValue("id", "__");
                                            onOpen();
                                        }}><EditRowIcon /></button>
                                        <button onClick={() => {
                                            formik.setFieldValue("id", "__");
                                            onOpenD()
                                        }}><DeleteIcon /></button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t">
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">demo</td>
                                <td className="px-4 py-2">demo</td>
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
                                <td className="px-4 py-2">demo</td>
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
                                <td className="px-4 py-2">demo</td>
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

            <AddSubCategoryModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            />

            <DeleteModal
                isOpen={isOpenD}
                onOpenChange={onOpenChangeD}
                handleDelete={handleDelete}
                onClose={() => {
                    formik.resetForm();
                }}
            />
        </>
    )
}
