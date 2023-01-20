import { Tasks } from "../../../types/Task";
import InfoTask from "./InfoTask";
import { motion } from "framer-motion"

interface TaskItemProps {
    isListInView: boolean;
    task: Tasks;
}

export default function TaskItem({ isListInView, task }: TaskItemProps) {
    return (
        <>
            <li className="animate-fade-in-down" key={task.id}>
                <article className={`bg-slate-100 rounded-md p-3 sm:p-4 flex text-left transition hover:shadow-lg hover:shadow-slate-300 ${isListInView ? "flex-row sm:h-32" : "flex-col h-52 sm:h-64"}`}>
                    <InfoTask isListInView={isListInView} task={task} />
                </article>
            </li>
        
            {/* <motion.div animate={{ x: 100 }} /> */}
        </>
    )
}