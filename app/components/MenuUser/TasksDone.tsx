import { useAllTasks } from "../../services/hooks/useAllTasks";

export default function TasksDone() {
  const { allTasks, isLoading, error } = useAllTasks();

  const percentageTodayTasks =
    (todayTasksDone.length * 100) / todaysTasks.length;

  const percentageAllTasks = (allTasksDone.length * 100) / tasks.length;

  const todaysTasksToShow = todaysTasks.slice(0, 3);

  const showMore = todaysTasks.length > todaysTasksToShow.length;

  return (
    <>
      {todaysTasks.length !== 0 && (
        <div className="mt-8">
          <span className="flex justify-between mb-2">
            <span>Tasks today</span> {todayTasksDone.length}/
            {todaysTasks.length}
          </span>
          <div className="barProgress">
            <div style={{ width: percentageTodayTasks + "%" }}></div>
          </div>
        </div>
      )}

      {tasks.length !== 0 && (
        <div className="mt-6">
          <span className="flex justify-between mb-2">
            <span>All tasks </span> {allTasksDone.length}/{tasks.length}
          </span>
          <div className="barProgress">
            <div style={{ width: percentageAllTasks + "%" }}></div>
          </div>
        </div>
      )}

      {todaysTasks.length === 0 && (
        <span className="mt-6 block pt-4 border-t-slate-200 dark:border-t-slate-700/[.3] border-t-2">
          No tasks today
        </span>
      )}

      {todaysTasks.length > 0 && (
        <div className="mt-8">
          <span className="mb-2 block">Today's tasks</span>
          <ul>
            {todaysTasksToShow.map((task) => (
              <li key={task.id} className="py-2 pl-6 text-slate-200 list-item">
                <span>{task.title}</span>
              </li>
            ))}
          </ul>
          {showMore && (
            <Link to="/today" className="pl-6">
              Show more
            </Link>
          )}
        </div>
      )}
    </>
  )
} 