"use client";

import { collection, deleteDoc, getDocs, query, where } from "firebase/firestore";
import { toast } from "sonner";
import { auth, db } from "../../services/Firebase";
import { useModalGlobals } from "../../services/hooks/useModalsGlobal";
import useToastStyleTheme from "../../services/hooks/useToastStyle";
import ModalConfirm from "./ModalConfirm";

export default function ModalDeleteAllTasks() {
  const { isOpenDeleteTasks, onCloseDeleteTasks } = useModalGlobals();
  const toastStyle = useToastStyleTheme();
  const userData = auth.currentUser;
  
  const handleDeleteAllTasks = async () => {
    onCloseDeleteTasks();
    
    const promise = async () => {
      const ref = collection(db, 'tasks');
      if (userData?.uid) {
        var queryRef = query(ref, where('userUid', '==', userData.uid))
      };

      const querySnapshot = await getDocs(queryRef);

      if (querySnapshot?.size <= 0)
        return toast.error("Não existe nenhma tarefa a ser excluida no momento.", toastStyle);

      querySnapshot?.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
    };

    toast.promise(promise, {
      ...toastStyle,
      loading: "Deletando todas as tarefas...",
      success: "Todas as tarefas foram deletadas.",
      error: "Falha ao tentar deletar todas as tarefas.",
    });
  };

  return (
    <>
      {isOpenDeleteTasks && (
        <ModalConfirm
          onClose={onCloseDeleteTasks}
          text="Você tem certeza de que deseja apagar todas as suas tarefas? Uma vez feita, não será possível recuperá-las novamente."
          onConfirm={handleDeleteAllTasks}
        />
      )}
    </>
  )
}