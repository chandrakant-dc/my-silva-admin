import { Link, useLocation } from "react-router";
import "./sidebar.css";
import SideNavList from "./sidebar-content";
import LogoutIcon from "@/svg/LogoutIcon";
import CloseMenuIcon from "@/svg/CloseMenuIcon";
import Cookies from "js-cookie";

export default function SideBar({ toggleMenu, handleClose }: { toggleMenu: boolean, handleClose: React.Dispatch<React.SetStateAction<boolean>> }) {
    const { pathname } = useLocation();
    const currentPage = pathname.split("/").at(-1)

    const handleLogout = () => {
        Cookies.remove("sitkn")
        window.location.href = "/"
    }

    return (
        <>
            <div className={`w-[240px] bg-white h-screen layout-sidebar p-8 pt-2 flex flex-col justify-between ${toggleMenu ? "open" : "close"}`}>
                <div className="w-[146px] mx-auto flex flex-col gap-y-[48px] content__wrapper">
                    <div className="flex justify-between items-center logo__header">
                        <img src="/brand-logo.svg" alt="logo" className="w-[111px] h-[64px]" />
                        <button onClick={() => handleClose(false)} className="close--btn"><CloseMenuIcon /></button>
                    </div>
                    <div className="flex flex-col gap-y-2.5">
                        {/* <div className="uppercase text-[14px] text-[#3F3F3F] font-bold hidden md:block">OVERVIEW</div> */}
                        <div className="flex flex-col gap-y-1">
                            {
                                SideNavList.length !== 0 && SideNavList.map(({ name, link, Icon }, idx) => {
                                    return <div key={idx}>
                                        <Link
                                            to={link}
                                            className={`h-10 flex items-center justify-between 
                                                md:rounded-lg rounded-none sidebar__link__hover ${idx === 0 ? "first-child" : ""} ${name} ${currentPage?.includes(link) ? "active" : (pathname === link || pathname === link + "/") ? "active" : ""}`}
                                            onClick={() => {
                                                // setCurrIdx(idx)
                                                handleClose(false)
                                            }}
                                        >
                                            <div className="flex items-center gap-x-3">
                                                <div className="w-4">
                                                    {Icon && <Icon />}
                                                </div>
                                                <div className="text-[#202020] text-[14px] font-medium whitespace-nowrap">{name}</div>
                                            </div>
                                        </Link>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-[1px]">
                    <button onClick={handleLogout} className="h-10 flex items-center gap-x-3 md:rounded-lg rounded-none menu__logout__btn sidebar__link__hover logout">
                        <LogoutIcon />
                        <div className="text-(--primary-color) text-[14px] font-medium">Logout</div>
                    </button>
                </div>
            </div>
        </>
    )
}
