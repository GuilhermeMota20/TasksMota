"use client";

import { CiSearch } from "react-icons/ci";
import { useSearch } from "../../services/hooks/useSearch";

type SearchTasksProps = {
  className?: string;
};

export default function SearchTasks({ className }: SearchTasksProps) {
  const { onOpen } = useSearch((state) => state);

  return (
    <>
      <div
        onClick={onOpen}
        className={`flex-1 col-span-3 row-start-2 ${className}`}
      >
        <div className="relative md:max-w-xs w-full">
          <label htmlFor="search" className="sr-only"></label>

          <input
            type="search"
            id="search"
            placeholder="Pesquisar por uma tarefa"
            className="cursor-default w-full h-full py-3 pl-4 pr-11 rounded-md bg-slate-100 focus:border-solid focus:border-pink-600 outline-transparent border-2 border-transparent hover:border-pink-600 focus:outline-none transition dark:bg-darkBlue-800"
          />

          <kbd className="absolute top-3
           right-4 flex items-center gap-1">
            <span className="text-xs p-1 bg-slate-200 dark:bg-darkBlue-700 rounded-md">⌘</span>
            <span className="text-sm">k</span>
          </kbd>
          
          {/* <CiSearch className=' text-slate-400' /> */}
        </div>

      </div>
    </>
  )
}

