import { useState } from "react";
import type { OtpI } from "../onboard.types"
import { useFormik } from "formik";
import { otpSchema } from "@/schema/auth.schema";

const initialValues: OtpI = {
    otp: "",
    email: ""
}


export default function useOtp() {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const formik = useFormik({
        initialValues,
        validationSchema: otpSchema,
        onSubmit: handleOTP
    })

    function handleOTP() {
        setIsLoading(true);
    }

    return {
        formik,
        isLoading
    }
}
