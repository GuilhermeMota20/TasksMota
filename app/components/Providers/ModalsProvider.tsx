"use client";

import { useEffect, useState } from "react";
import ModalConfigUser from "../Modals/ModalConfigUser";
import ModalDeleteAllTasks from "../Modals/ModalDeleteAllTasks";
import ModalDeleteDirectory from "../Modals/ModalDeleteDirectory";
import ModalDeleteTask from "../Modals/ModalDeleteTask";
import ModalDeleteUser from "../Modals/ModalDeleteUser";
import ModalLogout from "../Modals/ModalLogout";
import ModalNewDirectory from "../Modals/ModalNewDirectory";
import ModalTask from "../Modals/ModalTask";

export function ModalProvider() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  };

  return (
    <>
      <ModalLogout />
      <ModalDeleteAllTasks />
      <ModalDeleteUser />
      <ModalConfigUser />
      <ModalDeleteDirectory />
      <ModalNewDirectory />
      <ModalTask />
      <ModalDeleteTask />
    </>
  )
}