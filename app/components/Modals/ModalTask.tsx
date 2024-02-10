"use client";

import { doc, updateDoc } from "firebase/firestore";
import { toast } from "sonner";
import { db } from "../../services/Firebase";
import { useModalGlobals } from "../../services/hooks/useModalsGlobal";
import { toastStyleTheme } from "../../styles/toastStyle";
import { Tasks } from "../../types/Task";
import ModalNewTasks from "./ModalNewTasks";

export default function ModalTask() {
  const { isOpenNewTask, onCloseNewTask, currentTaskSelected, setCurrentTaskSelected } = useModalGlobals();
  const toastStyle = toastStyleTheme();

  const handleEditTask = (task: Tasks) => {
    const ref = doc(db, 'tasks', task.id);

    updateDoc(ref, { ...task })
      .then(() => toast.success("Tarefa editada com sucesso!", toastStyle))
      .catch(() => toast.error("Nao foi possivel editar a tarefa! Por favor, tente novamente.", toastStyle));

    setCurrentTaskSelected(undefined);
  };

  return (
    <>
      {isOpenNewTask && (
        <ModalNewTasks
          nameForm={currentTaskSelected ? 'Editar tarefa' : 'Adicionar nova tarefa'}
          onClose={() => {
            setCurrentTaskSelected(undefined);
            onCloseNewTask();
          }}
          onConfirm={currentTaskSelected && handleEditTask}
          task={currentTaskSelected ?? undefined}
        />
      )}
    </>
  )
}