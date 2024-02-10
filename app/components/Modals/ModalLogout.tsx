"use client";

import { useAuth } from "../../context/AuthContext";
import { useModalGlobals } from "../../services/hooks/useModalsGlobal";
import ModalConfirm from "./ModalConfirm";

export default function ModalLogout() {
  const { isOpenLogout, onCloseLogout } = useModalGlobals();
  const { Logout } = useAuth();

  const handleLogout = () => {
    Logout();
  };

  return (
    <>
      {isOpenLogout && (
        <ModalConfirm
          onClose={onCloseLogout}
          text="Você será desconectado da sua conta atual."
          onConfirm={handleLogout}
        />
      )}
    </>
  )
}