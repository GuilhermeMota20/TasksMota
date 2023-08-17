import { AiOutlineLogout } from "react-icons/ai";
import { BsPersonX } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { TbFileShredder } from "react-icons/tb";
import { auth } from "../../../services/Firebase";
import ConfigAccordion from "./ConfigAccordion";

interface ConfigUSerProps {
  activeIndex: number;
  setActiveIndex: any;
  showModalLogout?: () => void;
  showModalDeleteAllTasks?: () => void;
};

export default function ConfigUser({ activeIndex, setActiveIndex, showModalLogout, showModalDeleteAllTasks }: ConfigUSerProps) {
  const userData = auth.currentUser;

  return (
    <>
      <ConfigAccordion
        title="Configurações"
        icon={<CiSettings size={22} />}
        index={3}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <div className="flex flex-col justify-between gap-4">
          {userData && (
            <>
              <button className="transition hover:text-pink-600 flex items-center gap-4" onClick={showModalDeleteAllTasks}>
                <TbFileShredder size={18} />
                Deletar tarefas
              </button>
              <button className="transition hover:text-pink-600 flex items-center gap-4">
                <BsPersonX size={18} />
                Deletar conta
              </button>
              <button title="Logout (Sair)" className="transition hover:text-pink-600 flex items-center gap-4" onClick={showModalLogout}>
                <AiOutlineLogout size={18} />
                Sair da conta
              </button>
            </>
          )}
        </div>
      </ConfigAccordion>
    </>
  )
}