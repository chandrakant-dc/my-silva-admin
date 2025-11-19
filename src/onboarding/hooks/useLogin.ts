import { useFormik } from "formik"
import type { loginI } from "../onboard.types"
import { loginSchema } from "@/schema/auth.schema";
import { useState } from "react";

const initialValues: loginI = {
    email: "",
    password: "",
}

export default function useLogin() {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const formik = useFormik({
        initialValues,
        validationSchema: loginSchema,
        onSubmit: handleLogin
    });

    function handleLogin() {
        setIsLoading(true)
    }

    return {
        formik,
        isLoading
    }
}
