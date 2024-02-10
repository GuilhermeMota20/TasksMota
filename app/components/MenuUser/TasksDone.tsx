import Link from "next/link";
import { useEffect, useState } from "react";
import { useAllTasks } from "../../services/hooks/useAllTasks";
import { useTasksOfTheDay } from "../../services/hooks/useTasksOfTheDay";
import AnimationConfetti from "../Utilities/AnimationConfetti";

export default function TasksDone() {
  const { format } = require('date-fns');
  const { allTasks } = useAllTasks();
  const { tasksOfTheDay } = useTasksOfTheDay();

  const [isVisibleConfetti, setIsVisibleConfectti] = useState<boolean>(false);
  const [time, setTime] = useState(.2 * 60);

  const currentDate = new Date();
  const formattedDate = format(currentDate, 'yyyy-MM-dd');
  const todayTasksDone = tasksOfTheDay?.filter((task) => task.date === formattedDate && task.completed);
  const percentageTodayTasks = (todayTasksDone.length * 100) / tasksOfTheDay.length;

  const allTasksDone = allTasks?.filter((task) => task.completed);
  const percentageAllTasks = (allTasksDone.length * 100) / allTasks.length;

  const todaysTasksToShow = tasksOfTheDay.slice(0, 3);
  const showMore = tasksOfTheDay.length > todaysTasksToShow.length;

  useEffect(() => {
    setIsVisibleConfectti(false);

    if (percentageTodayTasks === 100 || percentageAllTasks === 100) {
      setIsVisibleConfectti(true);

      setTimeout(() => setTime(time - 1), 1000);

      if (time <= 0) {
        setTime(0);
        setIsVisibleConfectti(false);
      };
    };
  }, [percentageAllTasks, percentageTodayTasks, time]);

  return (
    <>
      {isVisibleConfetti && <AnimationConfetti />}

      {tasksOfTheDay.length !== 0 && (
        <div className="mt-8">
          <span className="flex justify-between mb-2">
            <span>Tarefas do dia</span> {todayTasksDone.length}/
            {tasksOfTheDay.length}
          </span>
          <div className="barProgress">
            <div style={{ width: percentageTodayTasks + "%" }}></div>
          </div>
        </div>
      )}

      {allTasks.length !== 0 && (
        <div className="mt-6">
          <span className="flex justify-between mb-2">
            <span>Todas as tarefas </span> {allTasksDone.length}/{allTasks.length}
          </span>
          <div className="barProgress">
            <div style={{ width: percentageAllTasks + "%" }}></div>
          </div>
        </div>
      )}

      {tasksOfTheDay.length === 0 && (
        <span className="mt-6 block pt-4 border-t-slate-200 dark:border-t-slate-700/[.3] border-t-2">
          Sem tarefas para hoje
        </span>
      )}

      {tasksOfTheDay.length > 0 && (
        <div className="mt-8">
          <span className="mb-2 block">
            {`Tarefas do dia`}
          </span>
          <ul>
            {todaysTasksToShow.map((task) => (
              <li key={task.id} className="py-2 pl-6 text-slate-500 list-item">
                <span>{task.title}</span>
              </li>
            ))}
          </ul>
          {showMore && (
            <Link href="/TasksOfTheDay" className="pl-6 transition hover:text-pink-600">
              Mostrar mais
            </Link>
          )}
        </div>
      )}
    </>
  )
} 