"use client";

import { collection, deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import { auth, db } from "../../services/Firebase";
import { useModalGlobals } from "../../services/hooks/useModalsGlobal";
import ModalConfirm from "./ModalConfirm";
import { toast } from "sonner";
import { toastStyleTheme } from "../../styles/toastStyle";

export default function ModalDeleteDirectory() {
  const { isOpenDeleteDirectory, onCloseDeleteDirectory, currentDirectorySelected, setCurrentDirectorySelected } = useModalGlobals();
  const toastStyle = toastStyleTheme();
  const userData = auth.currentUser;

  const handleDeletedDir = () => {
    const ref = collection(db, 'tasks');
    if (userData?.uid) {
      var currentUser = where('userUid', '==', userData.uid);
    };

    const queryDir = query(ref, currentUser, where('dir', '==', currentDirectorySelected?.dir));
    deleteDoc(doc(db, 'directories', currentDirectorySelected?.id));

    try {
      onSnapshot(queryDir, (snapshot) => {
        snapshot.docs.forEach((task) => {
          deleteDoc(doc(db, 'tasks', task.id));
        });
      });

      onCloseDeleteDirectory();
      setCurrentDirectorySelected(undefined);
      toast.success("O diretorio foi deletado com sucesso!", toastStyle);
    } catch {
      toast.error("Ocorreu algum erro ao tentar deletar o diretorio selecionado.", toastStyle);
    };
  };

  return (
    <>
      {isOpenDeleteDirectory && (
        <ModalConfirm
          text="Esse diretorio sera excluido para sempre, incluindo todas as tarefas vinculadas a ele!"
          onClose={onCloseDeleteDirectory}
          onConfirm={handleDeletedDir}
        />
      )}
    </>
  )
}