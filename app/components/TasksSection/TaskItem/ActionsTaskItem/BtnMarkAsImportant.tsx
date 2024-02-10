import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { toast } from "sonner";
import { db } from "../../../../services/Firebase";
import { toastStyleTheme } from "../../../../styles/toastStyle";
import { AlertType } from "../../../../types/Alert";

interface BtnMarkAsImportantPorps {
  taskId: string;
  taskImportant: boolean;
};

export default function BtnMarkAsImportant({ taskId, taskImportant }: BtnMarkAsImportantPorps) {
  const [alert, setAlert] = useState<AlertType | null>(null);
  const toastStyle = toastStyleTheme();

  const handleMarkAsImportant = () => {
    const docRef = doc(db, 'tasks', taskId);
    setAlert(null);

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
        className="transition hover:text-slate-700 ml-auto"
        onClick={handleMarkAsImportant}
      >
        <BsStarFill className={`text-md sm:text-lg ${taskImportant ? 'fill-yellow-500' : ''}`} />
      </button>
    </>
  )
}