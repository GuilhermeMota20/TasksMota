import { FaTrashAlt } from 'react-icons/fa';
import { useModalGlobals } from '../../../../services/hooks/useModalsGlobal';
import { useSearch } from '../../../../services/hooks/useSearch';
import { Tasks } from '../../../../types/Task';

interface BtnDeleteTaskProps {
  task: Tasks;
};

export default function BtnDeleteTask({ task }: BtnDeleteTaskProps) {
  const { onOpenDeleteTask, setCurrentTaskSelected } = useModalGlobals();
  const { onClose } = useSearch((state) => state);

  return (
    <>
      <button
        title="Deletar tarefa"
        className="ml-2 transition hover:text-slate-700"
        onClick={() => {
          setCurrentTaskSelected(task);
          onClose();
          onOpenDeleteTask();
        }}
      >
        <FaTrashAlt className="text-md sm:text-lg" />
      </button>
    </>
  )
}