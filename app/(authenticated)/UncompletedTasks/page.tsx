'use client'
import { MdOutlineRunningWithErrors } from "react-icons/md";
import LayoutTasks from "../../components/Utilities/LayoutTasks";
import { useStatusTasks } from "../../services/hooks/useStatusTasks";
import Head from "./head";

export default function UncompletedTasks() {
  const { tasks: uncompletedTasks, isLoading, error } = useStatusTasks(false);

  return (
    <>
      <Head />
      <LayoutTasks
        title={`Tarefas incompletas ( ${uncompletedTasks.length} )`}
        icon={<MdOutlineRunningWithErrors size={24} style={{ fontWeight: 'bold' }} />}
        tasks={uncompletedTasks}
        isLoading={isLoading}
        error={error}
      />
    </>
  )
}