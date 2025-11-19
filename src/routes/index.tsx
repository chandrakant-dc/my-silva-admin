import Category from "@/dashboard/category/Category";
import Layout from "@/dashboard/Layout";
import SubCategory from "@/dashboard/sub-category/SubCategory";
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
                <Route element={<Layout />} >
                    <Route path="/category" element={<Category />} />
                    <Route path="/sub-category" element={<SubCategory />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
