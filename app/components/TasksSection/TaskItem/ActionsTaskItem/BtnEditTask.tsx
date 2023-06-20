import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { SlOptionsVertical } from 'react-icons/sl';
import { db } from "../../../../services/Firebase";
import { Tasks } from "../../../../types/Task";
import ModalNewTasks from "../../../Modals/ModalNewTasks";
import { AlertType } from "../../../../types/Alert";
import Alert from "../../../Utilities/Alert";

interface BtnEditTaskProps {
  task: Tasks;
}

export default function BtnEditTask({ task }: BtnEditTaskProps) {
  const [modalEditTaskOpen, setModalEditTaskOpen] = useState(false);
  const [alert, setAlert] = useState<AlertType | null>(null);
  const showModalEditTask = () => modalEditTaskOpen ? setModalEditTaskOpen(false) : setModalEditTaskOpen(true);

  const editTaskHandler = (task: Tasks) => {
    const ref = doc(db, 'tasks', task.id);

    updateDoc(ref, {
      ...task
    }).then(() => setAlert({ type: 'success', message: `Tarefa (${task?.title}) editada com sucesso!` }))
      .catch(() => setAlert({ type: 'error', message: 'Nao foi possivel editar a tarefa! Por favor, tente novamente.' }));
  };

  return (
    <>
      {alert && (
        <Alert type={alert.type} message={alert.message} />
      )}

      <button
        title="Editar tarefa"
        className="transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center hover:text-slate-700"
        onClick={showModalEditTask}
      >
        <SlOptionsVertical className="text-md sm:text-lg" />
      </button>

      {modalEditTaskOpen && (
        <ModalNewTasks
          onClose={showModalEditTask}
          task={task}
          nameForm="Editar tarefa"
          onConfirm={editTaskHandler}
          setAlert={setAlert}
        />
      )}
    </>
  )
}