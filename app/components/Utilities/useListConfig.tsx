import { AiOutlineFire, AiOutlineLogout } from "react-icons/ai";
import { BsCheck2Circle, BsPersonX } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { MdLabelImportantOutline, MdOutlineRunningWithErrors } from "react-icons/md";
import { useModalGlobals } from "../../services/hooks/useModalsGlobal";
import { ListConfigType } from "../../types/ListConfig";
import { FaUserAstronaut } from "react-icons/fa";
import { TbFileShredder } from "react-icons/tb";

export const useListConfig = (): ListConfigType[] => {
  const {
    onOpenConfigUser,
    onOpenDeleteTasks,
    onOpenDeleteUser,
    onOpenLogout,
  } = useModalGlobals((state) => state);

  return [
    {
      icon: <FaUserAstronaut />,
      title: "Configuracoes de usuario",
      action: () => onOpenConfigUser(),
      description: "Nessa opcao, voce podera alterar as suas informacoes de usuaio como nome e avatar.",
    },
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