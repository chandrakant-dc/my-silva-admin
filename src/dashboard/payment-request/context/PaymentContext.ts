import type { PaymentActionI, UserSubscriptionListI } from "@/dashboard/hooks/usePayment";
import type { FormikProps } from "formik";
import { createContext } from "react";

interface PaymentContextI {
    subscriptionList: UserSubscriptionListI[];
    formik: FormikProps<PaymentActionI>
}

const initVal: PaymentContextI = {
    subscriptionList: [],
    formik: {} as FormikProps<PaymentActionI>
}


export const PaymentContext = createContext<PaymentContextI>(initVal);