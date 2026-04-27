import { getAllUserSubscriptions, paymentAction } from "@/services/payment.service";
import { addToast } from "@heroui/react";
import { useFormik } from "formik";
import { useEffect, useState } from "react";

const initialValues: PaymentActionI = {
    id: "",
    comment: "",
    type: ""
}

export default function usePayment() {
    const [subscriptionList, setSubscriptionList] = useState<UserSubscriptionListI[]>([]);

    useEffect(() => {
        async function handleAllUserSubscription() {
            const resp = await getAllUserSubscriptions();
            setSubscriptionList(resp?.data?.data || []);
        }
        handleAllUserSubscription()
    }, []);

    async function handleAllUserSubscription() {
        const resp = await getAllUserSubscriptions();
        setSubscriptionList(resp?.data?.data || []);
    }




    const formik = useFormik<PaymentActionI>({
        initialValues,
        onSubmit: async (val) => {
            const resp = await paymentAction(val);
            addToast({
                title: resp?.data?.message || "",
                color: "success"
            });
            await handleAllUserSubscription();
            formik.resetForm();
        }
    })


    return {
        subscriptionList,
        formik
    }
}

export interface UserSubscriptionListI {
    _id: string;
    user: {
        _id: string;
        fullName: string;
        email: string;
    };
    plan: {
        _id: string;
        name: string;
        price: number;
    };
    subscriptionStatus: string;
    receiptUrl: string;
}

export interface PaymentActionI {
    id: string;
    comment: string;
    type: string;
}