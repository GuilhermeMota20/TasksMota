import { useState } from "react";
import AccordionDirectories from "./AccordionDirectories";
import BrandMark from "./BrandMark";
import NavLinks from "./NavLinks";

export default function Sidebar() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-slate-50 w-60 xl:w-2/12 p-4 h-screen flex flex-col gap-4">
            <BrandMark />

            <div className="border-b border-slate-300"></div>

            <div className="flex flex-col gap-4">
                <NavLinks />

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