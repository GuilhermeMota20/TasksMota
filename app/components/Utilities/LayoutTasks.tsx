"use client"

import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import { ReactNode } from "react";
import { BarLoader } from "react-spinners";
import error404 from '../../assets/images/error404.svg';
import { useFormatListInView } from "../../services/hooks/useFormatListInView";
import { Tasks } from "../../types/Task";
import SortViews from "../TasksSection/SortViews";
import TaskItem from "../TasksSection/TaskItem";
import AddNewTask from "./AddNewTask";

interface LayoutTasksProps {
  title: string;
  icon?: ReactNode;
  tasks: Tasks[] | [] | DocumentData;
  isLoading: boolean;
  error: unknown;
};

export default function LayoutTasks({ title, icon, tasks, isLoading, error }: LayoutTasksProps) {
  const { isListInView } = useFormatListInView();

  return (
    <section>
      <div className="flex items-center gap-4">
        {icon}

        <h1 className="font-medium my-5 text-center sm:text-left sm:my-8 md:text2xl text-lg dark:text-slate-200">
          {title}
        </h1>
      </div>

      <SortViews />

      {isLoading ? (
        <div className="flex items-center justify-center mt-12">
          <BarLoader color="rgb(190, 24, 93)" />
        </div>

      ) : error ? (
        <div className="flex flex-col items-center justify-center m-4 text-center">
          <Image src={error404} alt="error404" blurDataURL="" />
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