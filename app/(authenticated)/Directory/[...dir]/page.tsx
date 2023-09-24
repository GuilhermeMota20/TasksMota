'use client'
import { AiOutlineBranches } from "react-icons/ai";
import LayoutTasks from "../../../components/Utilities/LayoutTasks";
import { useDirectoryTasks } from "../../../services/hooks/useDirectoryTasks";
import Head from "./head";

export default function DirTasks({ params }: { params: { dir: string } }) {
  const { directoryTasks, isLoading, error } = useDirectoryTasks();

  return (
    <>
      <Head />
      <LayoutTasks
        title={`Todas as tarefas ${params?.dir} ( ${directoryTasks.length} )`}
        icon={<AiOutlineBranches size={24} style={{ fontWeight: 'bold' }} />}
        tasks={directoryTasks}
        isLoading={isLoading}
        error={error}
      />
    </>
  )
}