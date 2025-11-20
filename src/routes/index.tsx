import CategoryIndex from "@/dashboard/category/CategoryIndex";
import Layout from "@/dashboard/Layout";
import ManageContentIndex from "@/dashboard/manage-content/ManageContentIndex";
import SubCategoryIndex from "@/dashboard/sub-category/SubCategoryIndex";
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
                    <Route path="/category" element={<CategoryIndex />} />
                    <Route path="/sub-category" element={<SubCategoryIndex />} />
                    <Route path="/manage-content" element={<ManageContentIndex />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
