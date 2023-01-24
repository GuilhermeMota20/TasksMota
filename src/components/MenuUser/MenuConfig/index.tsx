import { useState } from "react";
import { RxGear } from "react-icons/rx";

export default function MenuUserConfig() {
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
                <div
                    className="bg-slate-100 rounded-md flex flex-col gap-4 p-4 h-full w-full"
                >
                    <h1>a</h1>
                </div>
            </section>

            {showMenuConfig && (
                <div
                    className="fixed cursor-pointer bg-slate-600/[.2] w-full h-full z-10 top-0 left-0"
                    onClick={closeMenuConfig}
                ></div>
            )}
        </>
    )
}