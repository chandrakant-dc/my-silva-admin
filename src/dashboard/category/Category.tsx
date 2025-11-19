import { useDisclosure } from "@heroui/react";
import "./category.css";
import AddCategoryModal from "./AddCategoryModal";
import EditRowIcon from "@/svg/EditRowIcon";
import DeleteIcon from "@/svg/DeleteIcon";
import DeleteModal from "@/ui/DeleteModal";

export default function Category() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: isOpenD, onOpen: onOpenD, onOpenChange: onOpenChangeD } = useDisclosure();
    return (
        <>
            <div className="p-4">
                <div className="flex items-center justify-between h-9">
                    <div className="text-xl font-semibold">Category</div>
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
                                    Name
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

            <AddCategoryModal
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
