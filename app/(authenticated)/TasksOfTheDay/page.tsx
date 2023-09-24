'use client'
import { AiOutlineFire } from "react-icons/ai";
import LayoutTasks from "../../components/Utilities/LayoutTasks";
import { useTasksOfTheDay } from "../../services/hooks/useTasksOfTheDay";
import Head from "./head";

export default function TasksOfTheDay() {
  const { tasksOfTheDay, isLoading, error } = useTasksOfTheDay();

  return (
    <>
      <Head />
      <LayoutTasks
        title={`Tarefas do dia ( ${tasksOfTheDay.length} )`}
        icon={<AiOutlineFire size={24} style={{ fontWeight: 'bold' }} />}
        tasks={tasksOfTheDay}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}