"use client"
import { useState } from "react";
import { useScreenMedia } from "../../services/hooks/useScreenMedia";
import Divider from "../Utilities/Divider";
import BrandMarkUser from "./BrandMarkUser";
import BtnOppenSidebar from "./BtnOppenSidebar";
import NavLinks from "./NavLinks";

export default function Sidebar() {
    const mediaQueries = useScreenMedia();
    const classLinkActive = "text-rose-600 bg-violet-100 border-r-4 border-rose-500 fill-rose-600 dark:bg-slate-700/[.2] dark:text-slate-200 dark:border-slate-200";

    const [showMenu, setShowMenu] = useState(false);

    const closeMenu = () => showMenu ? setShowMenu(false) : setShowMenu(true);
    const openMenu = () => !showMenu ? setShowMenu(true) : setShowMenu(false);

    return (
        <>
            <section
                className={`dark:bg-darkBlue-800 flex flex-col gap-4 bg-slate-100 h-screen w-60 py-4 xl:w-2/12 fixed z-20 top-0 left-0 ${showMenu || mediaQueries.xl ? 'block' : 'hidden'}`}
            >
                <BrandMarkUser />
                <Divider />

                <nav className="flex flex-col gap-4">
                    <NavLinks classActive={classLinkActive} />
                </nav>
            </section>

            {showMenu && !mediaQueries.xl && (
                <div
                    className="fixed bg-slate-600/[.2] w-full h-full z-10 top-0 left-0"
                    onClick={closeMenu}
                ></div>
            )}

            {!mediaQueries.xl && (
                <div className={`${!mediaQueries.xl ? 'mr-6' : ''}`} onClick={openMenu}>
                    <BtnOppenSidebar />
                </div>
            )}
        </>
    )
}