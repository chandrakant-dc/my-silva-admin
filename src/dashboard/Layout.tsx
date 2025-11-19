import { Outlet } from "react-router";
import SideBar from "./sidebar/SideBar";
import "./layout.css";
import HamburgerIcon from "@/svg/HamburgerIcon";
import { useState } from "react";

export default function Layout() {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <>
            <div className="flex">
                <SideBar toggleMenu={toggleMenu} handleClose={setToggleMenu} />
                <div className={`lg:w-[calc(100%-240px)] w-full layout-content-area ${toggleMenu ? "open" : "close"} bg-white`}>
                    <div className="flex justify-between items-center p-4 mobile__header">
                        <img src="/brand-logo.svg" alt="logo" />
                        <button onClick={() => setToggleMenu(a => !a)}>
                            <HamburgerIcon />
                        </button>
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}
