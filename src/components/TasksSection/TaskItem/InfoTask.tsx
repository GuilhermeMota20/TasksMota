import { BsCalendar4Week } from 'react-icons/bs';
import { useDateFormated } from '../../../services/hooks/useDateFormated';
import { Tasks } from "../../../types/Task";

interface InfoTaskProps {
    task: Tasks;
    isListInView: boolean;
}

export default function InfoTask({ task, isListInView }: InfoTaskProps) {
    const dateFormated = useDateFormated(task.date);

    return (
        <div className={`flex flex-col flex-1 ${isListInView ? 'mr-6' : ''}`}>
            <div className={`flex items-center justify-between ${isListInView ? 'mb-1' : 'mb-2'}`}>
                <span className="block font-medium">
                    {task.title}
                </span>
            </div>

            <p
                title={task.description}
                className={`description mb-2 text-slate-500 ${isListInView ? 'line-clamp-2 sm:line-clamp-1' : 'line-clamp-3'}`}
            >
                {task.description}
            </p>

            <div className="mt-auto flex items-center w-full">
                <BsCalendar4Week className='mr-2 w-4 sm:w-5' />
                {dateFormated}
            </div>
        </div>
    )
}