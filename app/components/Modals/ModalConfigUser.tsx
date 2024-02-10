"use client";

import { useModalGlobals } from "../../services/hooks/useModalsGlobal";
import ModalUser from "./ModalUser";

export default function ModalConfigUser() {
  const { isOpenConfigUser, onCloseConfigUser } = useModalGlobals();

  return (
    <>
      {isOpenConfigUser && (
        <ModalUser
          nameForm="Configurações de usuário"
          onClose={onCloseConfigUser}
        />
      )}
    </>
  )
} 