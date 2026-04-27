import usePayment from "@/dashboard/hooks/usePayment";
import { PaymentContext } from "./PaymentContext";

export default function PaymentProvider({ children }: { children: React.ReactNode }) {
    const { subscriptionList, formik } = usePayment();
    return (
        <PaymentContext.Provider value={{
            subscriptionList,
            formik
        }}>
            {children}
        </PaymentContext.Provider>
    )
}
