import { BsStarFill } from "react-icons/bs";

interface BtnMarkAsImportantPorps {
    taskId: string;
    taskImportant: boolean;
}

export default function BtnMarkAsImportant({ taskId, taskImportant }: BtnMarkAsImportantPorps) {
    return (
        <button
            title={`${taskImportant ? 'Desmarca como importante' : 'Marcar como importante'}`}
            className="transition hover:text-slate-700 ml-auto"
        >
            <BsStarFill className={`text-md sm:text-lg ${taskImportant ? 'fill-yellow-500' : ''}`} />
        </button>
    )
}