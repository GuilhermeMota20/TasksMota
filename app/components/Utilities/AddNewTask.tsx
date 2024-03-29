"use client"
import { useModalGlobals } from '../../services/hooks/useModalsGlobal';

interface AddNewTaskProps {
  className?: string;
};

export default function AddNewTask({ className }: AddNewTaskProps) {
  const { onOpenNewTask } = useModalGlobals();

  return (
    <>
      <button
        className={`px-4 py-3 bg-pink-600 text-white transition rounded-md hover:bg-pink-700 dark:shadow-transparent ${className}`}
        onClick={onOpenNewTask}
      >
        Add nova tarefa
      </button>
    </>
  )
}