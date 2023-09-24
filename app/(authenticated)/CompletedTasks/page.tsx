'use client'
import { BsCheck2Circle } from "react-icons/bs";
import LayoutTasks from "../../components/Utilities/LayoutTasks";
import { useStatusTasks } from "../../services/hooks/useStatusTasks";
import Head from "./head";

export default function CompletedTasks() {
  const { tasks: completdTasks, isLoading, error } = useStatusTasks(true);

  return (
    <>
      <Head />
      <LayoutTasks
        title={`Tarefas concluídas ( ${completdTasks.length ?? 0} )`}
        icon={<BsCheck2Circle size={24} style={{ fontWeight: 'bold' }} />}
        tasks={completdTasks}
        isLoading={isLoading}
        error={error}
      />
    </>
  )
}