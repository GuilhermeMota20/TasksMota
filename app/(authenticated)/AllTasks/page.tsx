'use client'
import { GoHome } from "react-icons/go";
import LayoutTasks from "../../components/Utilities/LayoutTasks";
import { useAllTasks } from "../../services/hooks/useAllTasks";
import Head from "./head";

export default function AllTasks() {
  const { allTasks, isLoading, error } = useAllTasks();

  return (
    <>
      <Head />
      <LayoutTasks
        title={`Todas as tarefas ( ${allTasks?.length ?? 0} )`}
        icon={<GoHome size={24} style={{ fontWeight: 'bold' }} />}
        tasks={allTasks}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};
