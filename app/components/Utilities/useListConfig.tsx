import { AiOutlineLogout } from "react-icons/ai";
import { BsPersonX } from "react-icons/bs";
import { TbFileShredder } from "react-icons/tb";
import { useModalGlobals } from "../../services/hooks/useModalsGlobal";
import { ListConfigType } from "../../types/ListConfig";

export const useListConfig = (): ListConfigType[] => {
  const {
    onOpenConfigUser,
    onOpenDeleteTasks,
    onOpenDeleteUser,
    onOpenLogout,
  } = useModalGlobals((state) => state);

  return [
    {
      icon: <TbFileShredder />,
      title: "Deletar tarefas",
      action: () => onOpenDeleteTasks(),
      description: "Nessa opcao, sera deletada todas as suas tarefas criadas ate o momento.",
    },
    {
      icon: <BsPersonX />,
      title: "Deletar conta",
      action: () => onOpenDeleteUser(),
      description: "Nessa opcao, voce estara deletando sua conta permanentemente.",
    },
    {
      icon: <AiOutlineLogout />,
      title: "Sair da conta",
      action: () => onOpenLogout(),
      description: "Nessa opcao, voce sera desconectado de sua sessao atual.",
    },
  ];
};