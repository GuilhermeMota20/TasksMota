import { doc, updateDoc } from "firebase/firestore";
import { BsStarFill } from "react-icons/bs";
import { toast } from "sonner";
import { db } from "../../../../services/Firebase";
import useToastStyleTheme from "../../../../services/hooks/useToastStyle";

interface BtnMarkAsImportantPorps {
  taskId: string;
  taskImportant: boolean;
  className?: string;
};

export default function BtnMarkAsImportant({ taskId, taskImportant, className }: BtnMarkAsImportantPorps) {
  const toastStyle = useToastStyleTheme();

  const handleMarkAsImportant = () => {
    const docRef = doc(db, 'tasks', taskId);

    updateDoc(docRef, { important: taskImportant ? false : true })
      .then(() => toast.success(!taskImportant
        ? "Tarefa foi marcada como importante!"
        : "Marcacao de 'importante' foi removida da tarefa.",
        toastStyle
      ))
      .catch(() => toast.error(
        !taskImportant
          ? 'Nao foi possivel marcar tarefa como importante! Por favor, tente novamente.'
          : 'Nao foi possivel remover marcacao de "importante"! Por favor, tente novamente.',
        toastStyle
      ));
  };

  return (
    <>
      <button
        title={`${taskImportant ? 'Desmarca como importante' : 'Marcar como importante'}`}
        className={`transition hover:text-slate-700 ml-auto ${className}`}
        onClick={handleMarkAsImportant}
      >
        <BsStarFill className={`text-md sm:text-lg ${taskImportant ? 'fill-yellow-500' : ''}`} />
      </button>
    </>
  )
}