import ConfigAccordion from "./ConfigAccordion";
import { VscColorMode } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface DarkModeProps {
    activeIndex: number;
    setActiveIndex: any;
};

export default function DarkMode({ activeIndex, setActiveIndex }: DarkModeProps) {
    const [isCurrentMode, setIsCurrentMode] = useState<boolean>(()=> {
        if(typeof window !== "undefined") {
            const darkModeWasSet = localStorage.getItem("darkmode");
            if (darkModeWasSet == 'dark') return true;
            else return false;
        };
    });
    
    const activeDarkMode = () => {
        setIsCurrentMode(true);
    };
    const disabledDarkMode = () => {
        setIsCurrentMode(false);
    };
    
    useEffect(() => {
        const html = document.querySelector<HTMLHtmlElement>("html")!;

        if (isCurrentMode) {
            html.classList.add("dark");
            localStorage.setItem("darkmode", "dark");
            document
                .querySelector('meta[name="theme-color"]')
                ?.setAttribute("content", "#0f172a");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("darkmode", "light");
            document
                .querySelector('meta[name="theme-color"]')
                ?.setAttribute("content", "#e2e8f0");
        };
    }, [isCurrentMode]);

    return (
        <ConfigAccordion
            title="Temas"
            icon={<VscColorMode />}
            index={2}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
        >
            <div className="flex gap-4">
                <div className="relative">
                    <button
                        onClick={activeDarkMode}
                        className={`appearance-none w-6 h-12 rounded-md cursor-pointer border-2 bg-slate-800`}
                    ></button>

                    {isCurrentMode && (
                        <AiOutlineCheck className="absolute top-4 left-1 text-white font-black" />
                    )}
                </div>

                <div className="relative">
                    <button
                        onClick={disabledDarkMode}
                        className={`appearance-none w-6 h-12 rounded-md cursor-pointer border-2 bg-slate-200`}
                    ></button>

                    {!isCurrentMode && (
                        <AiOutlineCheck className="absolute top-4 left-1 text-slate-800 font-black" />
                    )}
                </div>
            </div>
        </ConfigAccordion >
    )
}