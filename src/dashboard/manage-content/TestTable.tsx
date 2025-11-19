import DeleteIcon from "@/svg/DeleteIcon";
import EditRowIcon from "@/svg/EditRowIcon";

export default function TestTable() {
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
                                    <button ><EditRowIcon /></button>
                                    <button ><DeleteIcon /></button>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">demo</td>
                            <td className="px-4 py-2">
                                <div className="flex items-center justify-end gap-x-4">
                                    <button ><EditRowIcon /></button>
                                    <button ><DeleteIcon /></button>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-t">
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">demo</td>
                            <td className="px-4 py-2">
                                <div className="flex items-center justify-end gap-x-4">
                                    <button ><EditRowIcon /></button>
                                    <button ><DeleteIcon /></button>
                                </div>
                            </td>
                        </tr>
                        <tr className="border-y">
                            <td className="px-4 py-2">1</td>
                            <td className="px-4 py-2">demo</td>
                            <td className="px-4 py-2">
                                <div className="flex items-center justify-end gap-x-4">
                                    <button ><EditRowIcon /></button>
                                    <button ><DeleteIcon /></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
