import { Tasks } from "../../../../types/Task";
import BtnDeleteTask from "./BtnDeleteTask";
import BtnEditTask from "./BtnEditTask";
import BtnMarkAsImportant from "./BtnMarkAsImportant";
import BtnToggleCompleted from "./BtnToggleCompleted";

interface AcrionsTaskItemProps {
  task: Tasks;
  isListInView: boolean;
};

export default function ActionsTaskItem({ task, isListInView }: AcrionsTaskItemProps) {
  return (
    <div className={`flex border-dashed border-slate-200 dark:border-slate-700 ${isListInView ? 'items-center' : 'border-t-2 w-full pt-4 mt-4'}`}>
      <BtnToggleCompleted isListInView={isListInView} taskCompleted={task.completed} taskId={task.id} />
      <BtnMarkAsImportant taskImportant={task.important} taskId={task.id} />
      <BtnDeleteTask task={task} />
      <BtnEditTask task={task} />
    </div>
  )
}