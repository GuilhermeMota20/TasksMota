import { useState } from "react";
import { RxGear } from "react-icons/rx";
import ChangeColorPrimary from "./ChangeColorprimary";
import HeaderConfig from "./HeaderConfig";

export default function MenuUserConfig() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [showMenuConfig, setShowMenuConfig] = useState(false);

    const closeMenuConfig = () => showMenuConfig ? setShowMenuConfig(false) : setShowMenuConfig(true);
    const openMenuConfig = () => !showMenuConfig ? setShowMenuConfig(true) : setShowMenuConfig(false);

    return (
        <>
            <button
                className="bg-white p-2 rounded-md transition hover:shadow-md"
                onClick={openMenuConfig}
            >
                <RxGear />
            </button>

            <section
                className={`fixed top-0 right-0 h-full w-72 p-4 z-20 ease-in-out opacity-0 transition-transform duration-300 
                ${showMenuConfig ? 'translate-x-0 opacity-100' : 'translate-x-full'}`}
            >
                <div className="bg-slate-100 rounded-md flex flex-col gap-4 h-full w-full">
                    <HeaderConfig />

                    <div className="p-4 mt-16">
                        <ChangeColorPrimary
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                        />
                    </div>
                </div>
            </section>

            {showMenuConfig && (
                <div
                    className="fixed bg-slate-600/[.2] w-full h-full z-10 top-0 left-0"
                    onClick={closeMenuConfig}
                ></div>
            )}
        </>
    )
}