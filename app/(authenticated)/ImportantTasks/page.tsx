'use client'
import { MdLabelImportantOutline } from "react-icons/md";
import LayoutTasks from "../../components/Utilities/LayoutTasks";
import { useImportantTasks } from "../../services/hooks/useImportantTasks";
import Head from "./head";

export default function ImportantTasks() {
  const { importantTasks, isLoading, error } = useImportantTasks();

  return (
    <>
      <Head />
      <LayoutTasks
        title={`Tarefas importantes ( ${importantTasks.length ?? 0} )`}
        icon={<MdLabelImportantOutline size={24} style={{ fontWeight: 'bold' }} />}
        tasks={importantTasks}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}