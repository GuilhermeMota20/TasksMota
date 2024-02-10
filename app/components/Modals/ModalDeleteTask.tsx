"use client";

import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "sonner";
import { db } from "../../services/Firebase";
import { useModalGlobals } from "../../services/hooks/useModalsGlobal";
import { toastStyleTheme } from "../../styles/toastStyle";
import ModalConfirm from "./ModalConfirm";

export default function ModalDeleteTask() {
  const { isOpenDeleteTask, onCloseDeleteTask, currentTaskSelected, setCurrentTaskSelected } = useModalGlobals();
  const toastStyle = toastStyleTheme();

  const handleDelete = () => {
    const ref = doc(db, 'tasks', currentTaskSelected?.id);

    deleteDoc(ref)
      .then(() => toast.success("Tarefa excluida com sucesso!", toastStyle))
      .catch(() => toast.error("Nao foi possivel excluir a tarefa! Por favor, tente novamente.", toastStyle));

    onCloseDeleteTask();
  };

  return (
    <>
      {isOpenDeleteTask && (
        <ModalConfirm
          text="Essa tarefa será deletada permanentemente."
          onClose={() => {
            setCurrentTaskSelected(undefined);
            onCloseDeleteTask();
          }}
          onConfirm={handleDelete}
        />
      )}
    </>
  )
}