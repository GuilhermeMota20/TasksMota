import { ReactNode } from "react";

interface ModalWarningProps {
  title: string;
  text: string;
  children: ReactNode;
};

export default function ModalWarning({ text, title, children }: ModalWarningProps) {
  return (
    <div className="xl:text-base sm:text-sm text-xs fixed bg-slate-600/[.2] top-0 left-0 w-full h-full backdrop-blur-sm z-40 grid place-items-center px-2 text-slate-600 dark:text-slate-200">
      <div className="relative bg-slate-200 dark:bg-darkBlue-900 max-w-lg w-full rounded-md p-3 sm:p-5 flex flex-col justify-star">
        <h2 className="font-medium mb-5 text-lg md:text-2xl">{title}</h2>

        <p className="text-slate-500">{text}</p>

        {children}
      </div>
    </div>
  )
}