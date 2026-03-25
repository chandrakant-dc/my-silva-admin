import DeleteIcon from "@/svg/DeleteIcon";
import EditRowIcon from "@/svg/EditRowIcon";
import DeleteModal from "@/ui/DeleteModal";
import { useDisclosure } from "@heroui/react";
import { useContext } from "react";
import AddSubCategoryModal from "./AddSubCategoryModal";
import { SubCategoryContext } from "./context/SubCategoryContext";

export default function SubCategory() {
    const { isOpen: isOpenD, onOpen: onOpenD, onOpenChange: onOpenChangeD, onClose } = useDisclosure();
    const { formik, isOpen, onOpenChange, onOpen, handleDelete, subcategoryList } = useContext(SubCategoryContext);

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
                            {
                                subcategoryList.map((item, i) => (
                                    <tr className="border-t" key={`subcategory-${i + 1}`}>
                                        <td className="px-4 py-2">{i + 1}</td>
                                        <td className="px-4 py-2">{item?.category?.name}</td>
                                        <td className="px-4 py-2">{item?.name}</td>
                                        <td className="px-4 py-2">
                                            <div className="flex items-center justify-end gap-x-4">
                                                <button onClick={() => {
                                                    formik.setFieldValue("id", item?._id);
                                                    formik.setFieldValue("category", item?.category?._id);
                                                    formik.setFieldValue("subCategory", item?.name);
                                                    formik.setFieldValue("description", item?.description);
                                                    formik.setFieldValue("image", item?.image);
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

            <AddSubCategoryModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            />

            <DeleteModal
                isOpen={isOpenD}
                onOpenChange={onOpenChangeD}
                handleDelete={async () => {
                    await handleDelete();
                    onClose();
                }}
                onClose={() => {
                    formik.resetForm();
                }}
            />
        </>
    )
}
