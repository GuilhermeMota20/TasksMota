import React from "react";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
    children: React.ReactNode;
    title: string;
    onClose: () => void;
}

export default function Modal({ children, title, onClose }: ModalProps) {
    const closeModalHandler = (event: React.MouseEvent) => {
        if (event.target === event.currentTarget) {
            onClose();
        };
    };

    return (
        <div
            className="xl:text-base sm:text-sm text-xs fixed bg-slate-600/[.2] top-0 left-0 w-full h-full z-40 grid place-items-center px-2 text-slate-600 dark:text-slate-200"
            onClick={closeModalHandler}
        >
            <div className="relative bg-slate-200 dark:bg-darkBlue-900 max-w-lg w-full rounded-md p-3 sm:p-5 flex flex-col justify-star">
                <button
                    aria-label="close alert"
                    className="absolute right-3 sm:right-4 rounded-md transition p-2 hover:bg-slate-100  hover:shadow-sm dark:hover:bg-darkBlue-800"
                    onClick={onClose}
                >
                    <IoMdClose />
                </button>
                <h2 className="font-medium mb-5 text-lg md:text-2xl">{title}</h2>
                {children}
            </div>
        </div>
    )
}