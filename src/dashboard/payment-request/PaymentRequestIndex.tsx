import PaymentProvider from "./context/PaymentProvider";
import PaymentRequestMain from "./PaymentRequestMain";

export default function PaymentRequestIndex() {
    return (
        <PaymentProvider>
            <PaymentRequestMain />
        </PaymentProvider>
    )
}
