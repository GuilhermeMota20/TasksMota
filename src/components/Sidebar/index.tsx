import { useState } from "react";
import Divider from "../Utilities/Divider";
import LayoutsMenus from "../Utilities/LayoutMenus";
import AccordionDirectories from "./AccordionDirectories";
import BrandMark from "./BrandMark";
import NavLinks from "./NavLinks";

export default function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(1);
    const classLinkActive = "text-rose-600 bg-violet-100 border-r-4 border-rose-500 fill-rose-600 dark:bg-slate-700/[.2] dark:text-slate-200 dark:border-slate-200";

    const [showMenu, setShowMenu] = useState(false);

    const closeMenu = () => {
        console.log('click');
        showMenu ? false : true;
    };

    return (
        <LayoutsMenus
            menuOpen={showMenu}
            closeMenuHandler={closeMenu}
            className="top-0 left-0"
        >
            <BrandMark />
            <Divider />
            <nav className="flex flex-col gap-4">
                <NavLinks classActive={classLinkActive} />

                <AccordionDirectories
                    title="Diretorios"
                    index={1}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                >
                    This content for directories.
                </AccordionDirectories>
            </nav>
        </LayoutsMenus>
    )
}

// showSidebar ? "translate-x-0 " : "translate-x-full"