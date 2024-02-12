import { useEffect, useState } from "react";
import { VscColorMode } from "react-icons/vsc";

type ButtonThemeProps = {
  className?: string;
};

export default function ButtonTheme({ className }: ButtonThemeProps) {
  const [isCurrentMode, setIsCurrentMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const darkModeWasSet = localStorage.getItem("darkmode");
      if (darkModeWasSet == 'dark') return true;
      else return false;
    };
  });

  const handleToggleTheme = () => {
    setIsCurrentMode((prev) => !prev);
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
    <>
      <div
        onClick={handleToggleTheme}
        className={`${className} flex items-center justify-center bg-slate-100 dark:bg-darkBlue-700 rounded-md hover:shadow-md w-12 h-12`}
      >
        <VscColorMode />
      </div>
    </>
  )
}