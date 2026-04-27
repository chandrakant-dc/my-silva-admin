import { useDisclosure } from "@heroui/react";
import { useContext } from "react";
import { Link } from "react-router";
import { PaymentContext } from "./context/PaymentContext";
import PaymentRequestModal from "./PaymentRequestModal";

export default function PaymentRequestMain() {
    const { subscriptionList, formik } = useContext(PaymentContext);
    const { isOpen, onOpenChange, onOpen } = useDisclosure();
    return (
        <div className="p-4">
            <div className="flex items-center justify-between h-9">
                <div className="text-xl font-semibold">Payment Request</div>
                {/* <button onClick={onOpen} className="primary-btn max-w-28 h-full text-sm">Add New</button> */}
            </div>
            <div className="overflow-x-auto h-[calc(100vh-85px)] border rounded-lg mt-4">
                <table className="min-w-full">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left sticky top-0 bg-gray-100 z-10 w-12">
                                S.No
                            </th>
                            <th className="px-4 py-2 text-left sticky top-0 bg-gray-100 z-10">
                                User
                            </th>
                            <th className="px-4 py-2 text-left sticky top-0 bg-gray-100 z-10">
                                Plan
                            </th>
                            <th className="px-4 py-2 text-left sticky top-0 bg-gray-100 z-10">
                                Receipt
                            </th>
                            <th className="px-4 py-2 text-left sticky top-0 bg-gray-100 z-10">
                                Status
                            </th>
                            <th className="px-4 py-2 sticky top-0 bg-gray-100 z-10 text-end">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            subscriptionList.map((item, i) => (
                                <tr className="border-t" key={`topic-${i + 1}`}>
                                    <td className="px-4 py-2">{i + 1}</td>
                                    <td className="px-4 py-2">
                                        {item?.user?.email}
                                    </td>
                                    <td className="px-4 py-2">
                                        {item?.plan?.name} <sub>/ ₹{item?.plan?.price}</sub>
                                    </td>
                                    <td className="px-4 py-2">
                                        <Link to={item?.receiptUrl} target="_blank" className="text-blue-500">view</Link>
                                    </td>
                                    <td className={`px-4 py-2 ${item?.subscriptionStatus === "pending" ? "text-gray-500" : item?.subscriptionStatus === "activated" ? "text-green-600" : "text-red-500"}`}>
                                        {item?.subscriptionStatus}
                                    </td>
                                    <td className="px-4 py-2">
                                        <div className="flex items-center justify-end gap-x-4">
                                            <button
                                                disabled={item?.subscriptionStatus !== "pending"}
                                                className="text-sm text-blue-500 disabled:text-gray-400"
                                                onClick={() => {
                                                    onOpen();
                                                    console.log(item?._id);

                                                    formik.setFieldValue("id", item?._id);
                                                }}
                                            >
                                                view
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <PaymentRequestModal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            />
        </div>
    )
}
