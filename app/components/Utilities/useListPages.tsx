import { AiOutlineFire } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { MdLabelImportantOutline, MdOutlineRunningWithErrors } from "react-icons/md";
import { ListPagesType } from "../../types/ListPages";

export const useListPages = (): ListPagesType[] => {
  return [
    {
      icon: <GoHome />,
      title: "Todas as tarefas",
      href: "/AllTasks",
      description: "Tela de listagem de todas as tarefas já criadas.",
    },
    {
      icon: <AiOutlineFire />,
      title: "Tarefas do dia",
      href: "/TasksOfTheDay",
      description: "Tela de listagem de todas as tarefas a serem realizadas no dia.",
    },
    {
      icon: <MdLabelImportantOutline />,
      title: "Tarefas importantes",
      href: "/ImportantTasks",
      description: "Tela de listagem de todas as tarefas identificadas como importantes.",
    },
    {
      icon: <BsCheck2Circle />,
      title: "Tarefas concluídas",
      href: "/CompletedTasks",
      description: "Tela de listagem de todas as tarefas identificadas como concluídas.",
    },
    {
      icon: <MdOutlineRunningWithErrors />,
      title: "Tarefas incompletas",
      href: "/UncompletedTasks",
      description: "Tela de listagem de todas as tarefas identificadas como incompletas.",
    },
  ];
};