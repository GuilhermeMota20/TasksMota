import Link from "next/link";
import { Tasks } from "../../../types/Task";
import ActionsTaskItem from "./ActionsTaskItem";
import InfoTask from "./InfoTask";

interface TaskItemProps {
    isListInView: boolean;
    task: Tasks;
}

export default function TaskItem({ isListInView, task }: TaskItemProps) {
    return (
        <li key={task.id}>
            <Link
                href={`/dir/${task.dir}`}
                className="ml-auto mr-4 w-min whitespace-nowrap overflow-hidden max-w-[10rem] text-center text-ellipsis bg-rose-200 text-rose-600 px-4 py-1 rounded-t-md transition dark:bg-darkBlue-700 dark:text-slate-200 block hover:bg-rose-300 dark:hover:bg-rose-500"
            >
                {task.dir}
            </Link>
            <article className={`bg-slate-100 dark:bg-darkBlue-800 rounded-md p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 dark:hover:shadow-transparent ${isListInView ? "flex-row sm:h-32" : "flex-col h-52 sm:h-64"}`}>
                <InfoTask isListInView={isListInView} task={task} />
                <ActionsTaskItem isListInView={isListInView} task={task} />
            </article>
        </li>
    )
}