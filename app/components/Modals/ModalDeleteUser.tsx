"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { auth } from "../../services/Firebase";
import { useModalGlobals } from "../../services/hooks/useModalsGlobal";
import ModalConfirm from "./ModalConfirm";
import { toast } from "sonner";
import useToastStyleTheme from "../../services/hooks/useToastStyle";

export default function ModalDeleteUser() {
  const { isOpenDeleteUser, onCloseDeleteUser } = useModalGlobals();
  const toastStyle = useToastStyleTheme();
  const router = useRouter();

  const userData = auth.currentUser;
  const { Logout } = useAuth();

  const handleLogout = () => {
    Logout();
  };

  const handleDeleteCurrentUser = () => {
    onCloseDeleteUser();

    userData.delete()
      .then(() => {
        handleLogout();
        router.push('/');
      }).catch(() => {
        toast.error("Erro ao excluir seu acesso. Tente novamente mais tarde.", toastStyle);
      });
  };

  return (
    <>
      {isOpenDeleteUser && (
        <ModalConfirm
          onClose={onCloseDeleteUser}
          text="Você tem certeza de que deseja deletar seu acesso? Uma vez feita, não será possível recuperá-la novamente e todas suas informações serão perdidas."
          onConfirm={handleDeleteCurrentUser}
        />
      )}
    </>
  )
}