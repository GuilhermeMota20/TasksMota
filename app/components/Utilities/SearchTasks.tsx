import { CiSearch } from "react-icons/ci";

type SearchTasksProps = {
  className?: string;
};

export default function SearchTasks({ className }: SearchTasksProps) {
  return (
    <div className={`flex-1 col-span-3 row-start-2 md:pr-10 ${className}`}>
      <form autoComplete="off" className="relative md:max-w-xs w-full">
        <label htmlFor="search" className="sr-only"></label>

        <input
          type="search"
          id="search"
          placeholder="Pesquisar por uma tarefa"
          className="cursor-default w-full h-full py-3 pl-4 pr-11 rounded-md bg-slate-100 focus:border-solid focus:border-pink-600 outline-transparent border-2 border-transparent hover:border-pink-600 focus:outline-none transition dark:bg-darkBlue-800"
        />
        <CiSearch className='absolute w-4 sm:w-5 right-4 top-4 text-slate-400' />
      </form>
    </div>
  )
}