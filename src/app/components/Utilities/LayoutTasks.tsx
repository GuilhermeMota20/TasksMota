"use client"
import { DocumentData } from "firebase/firestore";
import { useState } from "react";
import { MoonLoader } from "react-spinners";
import { Tasks } from "../../types/Task";
import SortViews from "../TasksSection/SortViews";
import TaskItem from "../TasksSection/TaskItem";
import AddNewTask from "./AddNewTask";

interface LayoutTasksProps {
  title: string;
  tasks: Tasks[] | [] | DocumentData;
  isLoading: boolean;
  error: unknown;
};

export default function LayoutTasks({ title, tasks, isLoading, error }: LayoutTasksProps) {
  const [isListInView, setIsListInView] = useState<boolean>(false);

  return (
    <section>
      <h1 className="font-medium my-5 text-center sm:text-left sm:my-8 md:text2xl text-lg dark:text-slate-200">
        {title}
      </h1>

      <SortViews
        isListInView={isListInView}
        setIsListInView={setIsListInView}
      />

      {isLoading ? (
        <div className="flex items-center justify-center mt-12">
          <MoonLoader color="rgb(190, 24, 93)" size={24} />
        </div>

      ) : error ? (
        <div className="flex items-center justify-center m-4 text-center">
          <span>Ocorreu um erro ao obter as tarefas.</span>
        </div>

      ) : (
        <ul className={`animate-fade-in-down tasksList mt-4 grid gap-2 sm:gap-4 xl:gap-6 ${isListInView
          ? "grid-cols-1"
          : "2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end"
          }`}
        >
          {tasks?.map((task) => (
            <TaskItem key={task.id} isListInView={isListInView} task={task} />
          ))}

          <li>
            <AddNewTask className={`border-2 border-dashed border-slate-300 bg-inherit text-inherit text-slate-400 w-full rounded-md transition hover:bg-slate-300 hover:text-slate-500 dark:border-darkBlue-700 dark:hover:bg-darkBlue-800 dark:hover:text-slate-300 ${isListInView ? 'h-20 sm:h-32' : 'h-52 sm:h-64'}`} />
          </li>
        </ul>
      )}
    </section>
  )
}