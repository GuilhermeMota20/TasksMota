"use client";

import { File } from "lucide-react";
import { useEffect, useState } from "react";
import { useAllTasks } from "../../services/hooks/useAllTasks";
import { useSearch } from "../../services/hooks/useSearch";
import { Tasks } from "../../types/Task";
import BtnDeleteTask from "../TasksSection/TaskItem/ActionsTaskItem/BtnDeleteTask";
import BtnEditTask from "../TasksSection/TaskItem/ActionsTaskItem/BtnEditTask";
import BtnMarkAsImportant from "../TasksSection/TaskItem/ActionsTaskItem/BtnMarkAsImportant";
import BtnToggleCompleted from "../TasksSection/TaskItem/ActionsTaskItem/BtnToggleCompleted";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../Ui/CommandUi";

export default function SearchCommand() {
  const { allTasks } = useAllTasks();

  const [isMounted, setIsMounted] = useState(false);

  const { toggle, isOpen, onClose } = useSearch((state) => state);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      };
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggle]);

  if (!isMounted) {
    return null;
  };

  return (
    <>
      <CommandDialog open={isOpen} onOpenChange={onClose} >
        <CommandInput
          placeholder={`Pesquise por alguma tarefa de sua ToDoTasks...`}
        />

        <CommandList className="bg-slate-50 dark:bg-darkBlue-900">
          <CommandEmpty>
            Nenhum resultado encontrado.
          </CommandEmpty>

          <CommandGroup heading="Tarefas">
            {allTasks?.map((task, index) => (
              <CommandItem
                key={index}
                value={`${task.id}-${task.title}`}
                title={task.title}
              >
                <div className="flex items-center gap-2 w-full">
                  <File className="h-6 w-6" />

                  <span className="mr-auto">
                    {task.title}
                  </span>
                </div>

                <div className={`flex w-full justify-end border-dashed border-slate-200 dark:border-slate-700 items-center`}>
                  <BtnToggleCompleted isListInView={true} taskCompleted={task.completed} taskId={task.id} />
                  <BtnMarkAsImportant taskImportant={task.important} taskId={task.id} className="ml-0" />
                  <BtnDeleteTask task={task as Tasks} />
                  <BtnEditTask task={task as Tasks} />
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
