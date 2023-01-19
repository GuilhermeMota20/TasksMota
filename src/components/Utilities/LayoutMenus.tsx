import { ReactNode } from "react";
import { useScreenMedia } from "../../services/hooks/useScreenMedia";

interface LayoutMenusProps {
    menuOpen: boolean;
    children: ReactNode;
    closeMenuHandler: () => void;
    className?: string;
};

export default function LayoutsMenus(props: LayoutMenusProps) {
    const mediaQueries = useScreenMedia();

    return (
        <>
            <section
                className={`flex flex-col gap-4 bg-slate-100 h-screen w-60 p-4 xl:w-2/12 fixed z-20 
                ${props.className} ${props.menuOpen || mediaQueries.xl ? 'block' : 'hidden'}`}
            >
                {props.children}
            </section>

            {props.menuOpen && !mediaQueries.xl && (
                <div
                    className="fixed  bg-slate-600/[.2] w-full h-full z-10 top-0 left-0"
                    onClick={props.closeMenuHandler}
                >
                    aaaaaaaaaa
                </div>
            )}
        </>
    )
}