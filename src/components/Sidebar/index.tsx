import { useState } from "react";
import Divider from "../Utilities/Divider";
import AccordionDirectories from "./AccordionDirectories";
import BrandMark from "./BrandMark";
import NavLinks from "./NavLinks";

export default function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(1);
    const classLinkActive = "text-rose-600 bg-violet-100 border-r-4 border-rose-500 fill-rose-600 dark:bg-slate-700/[.2] dark:text-slate-200 dark:border-slate-200";

    return (
        <section className="bg-slate-50 w-60 xl:w-2/12 p-4 h-screen flex flex-col gap-4 fixed top-0 left-0">
            <BrandMark />
            <Divider />
            <div className="flex flex-col gap-4">
                <NavLinks classActive={classLinkActive} />

                <AccordionDirectories
                    title="Diretorios"
                    index={1}
                    activeIndex={activeIndex}
                    setActiveIndex={setActiveIndex}
                >
                    This content for directories.
                </AccordionDirectories>
            </div>
        </section>
    )
}