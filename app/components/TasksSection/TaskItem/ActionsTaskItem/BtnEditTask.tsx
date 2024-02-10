import { SlOptionsVertical } from 'react-icons/sl';
import { useModalGlobals } from "../../../../services/hooks/useModalsGlobal";
import { Tasks } from "../../../../types/Task";

interface BtnEditTaskProps {
  task: Tasks;
};

export default function BtnEditTask({ task }: BtnEditTaskProps) {
  const { setCurrentTaskSelected, onOpenNewTask } = useModalGlobals();

  return (
    <>
      <button
        title="Editar tarefa"
        className="transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center hover:text-slate-700"
        onClick={() => {
          onOpenNewTask();
          setCurrentTaskSelected(task);
        }}
      >
        <SlOptionsVertical className="text-md sm:text-lg" />
      </button>
    </>
  )
}