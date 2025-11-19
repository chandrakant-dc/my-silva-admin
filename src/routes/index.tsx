import Login from "@/onboarding/login/Login";
import OTP from "@/onboarding/otp/OTP";
import { BrowserRouter, Route, Routes } from "react-router";

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route index element={<Login />} />
                <Route path="/otp" element={<OTP />} />

                {/* Protected Routes */}
            </Routes>
        </BrowserRouter>
    )
}
