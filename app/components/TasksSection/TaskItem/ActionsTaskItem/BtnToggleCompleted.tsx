import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { db } from "../../../../services/Firebase";
import { AlertType } from "../../../../types/Alert";
import Alert from "../../../Utilities/Alert";

interface BtnToggleCompletedProps {
  taskCompleted: boolean;
  taskId: string;
  isListInView: boolean;
}

export default function BtnToggleCompleted({ isListInView, taskCompleted, taskId }: BtnToggleCompletedProps) {
  const [alert, setAlert] = useState<AlertType | null>(null);

  const handleMarkAsCompleted = () => {
    const docRef = doc(db, 'tasks', taskId);
    setAlert(null);

    updateDoc(docRef, {
      completed: taskCompleted ? false : true
    }).then(() => setAlert({
      type: 'success',
      message: !taskCompleted
        ? `Tarefa foi concluida com sucesso!`
        : 'Status da tarefa foi modificada para "Incompleta".'
    })).catch(() => setAlert({
      type: 'error',
      message: !taskCompleted
        ? 'Nao foi possivel marcar tarefa como concoluida! Por favor, tente novamente.'
        : 'Nao foi possivel remover marcacao de "concoluida"! Por favor, tente novamente.'
    }));
  };

  return (
    <>
      {alert && (
        <Alert type={alert.type} message={alert.message} />
      )}

      <button
        title={`${taskCompleted ? 'Marcar como incompleta' : 'Marcar como completa'}`}
        className={`${taskCompleted ? 'bg-emerald-200 text-emerald-800' : 'bg-amber-200 text-amber-800'} ${isListInView ? 'mr-4' : 'mr-4 order-0'} rounded-md font-medium`}
        onClick={handleMarkAsCompleted}
      >
        <span className="block py-1 px-3 absolute invisible sm:static sm:visible">
          {taskCompleted ? 'Completa' : 'Incompleta'}
        </span>

        <span className="sm:hidden w-6 h-6 grid place-items-center">
          {taskCompleted ? (
            <AiOutlineCheck className="text-md" />
          ) : (
            <AiOutlineClose className="text-md" />
          )}
        </span>
      </button>
    </>
  )
}