import { useState } from "react";
import { Tasks } from "../../types/Task";
import SortViews from "../TasksSection/SortViews";
import TaskItem from "../TasksSection/TaskItem";

interface LayoutTasksProps {
    title: string;
    tasks: Tasks[] | [];
};

export default function LayoutTasks({ title, tasks }: LayoutTasksProps) {
    const [isListInView, setIsListInView] = useState<boolean>(false);

    return (
        <section>
            <h1 className="font-medium my-5 text-center sm:text-left sm:my-8 md:text2xl text-lg">
                {title}
            </h1>

            <SortViews 
                isListInView={isListInView}
                setIsListInView={setIsListInView}
                // setSortedBy={}
                // sortedBy=""
                // key={}
            />

            <ul className={`tasksList mt-4 grid gap-2 sm:gap-4 xl:gap-6 ${isListInView
                ? "grid-cols-1"
                : "2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end"
                }`}
            >
                {tasks.map((task) => (
                    <TaskItem key={task.id} isListInView={isListInView} task={task} />
                ))}

                <li>
                    <button
                        // onClick={()=> void}
                        className={`border-2 border-dashed border-slate-300 text-slate-400 w-full rounded-md transition hover:bg-slate-300 hover:text-slate-500 ${isListInView ? 'h-20 sm:h-32' : 'h-52 sm:h-64'}`}
                    >
                        Add nova tarefa
                    </button>
                </li>
            </ul>
        </section>
    )
}