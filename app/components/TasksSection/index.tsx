import { LayoutTaskSectionProps } from "../../types/Task";
import LayoutTasks from "../Utilities/LayoutTasks";

export default function TasksSection({ tasks, error, isLoading, title }: LayoutTaskSectionProps) {
  return (
    <LayoutTasks
      title={title}
      tasks={tasks}
      isLoading={isLoading}
      error={error}
    />
  )
};