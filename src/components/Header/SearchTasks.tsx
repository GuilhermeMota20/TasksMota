import { CiSearch } from "react-icons/ci";

export default function SearchTasks() {
    return(
        <div className='w-80 relative'>
        <input
            type="text"
            placeholder="Pesquisar por uma tarefas"
            className="w-full h-full py-3 pl-4 pr-11 rounded-md bg-slate-100 focus:border-solid focus:border-pink-600 outline-transparent border-2 border-transparent hover:border-pink-600 focus:outline-none transition"
        />

        <CiSearch className='absolute right-4 top-4' />
    </div>
    )
}