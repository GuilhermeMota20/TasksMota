import { AiOutlineLogout } from "react-icons/ai";
import { BsPersonX } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FaUserAstronaut } from "react-icons/fa";
import { TbFileShredder } from "react-icons/tb";
import { useAuth } from "../../../context/AuthContext";
import { auth } from "../../../Firebase";
import ConfigAccordion from "./ConfigAccordion";

interface ConfigUSerProps {
    activeIndex: number;
    setActiveIndex: any;
};

export default function ConfigUser({ activeIndex, setActiveIndex }: ConfigUSerProps) {
    const { Logout } = useAuth();

    const userData = auth.currentUser;

    return (
        <ConfigAccordion
            title="Configurações"
            icon={<CiSettings size={22} />}
            index={3}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
        >
            <div className="flex flex-col justify-between gap-4">
                <button className="transition hover:text-pink-600 flex items-center gap-4">
                    <TbFileShredder size={18} />
                    Deletar tarefas
                </button>

                <button className="transition hover:text-pink-600 flex items-center gap-4">
                    <BsPersonX size={18} />
                    Deletar conta
                </button>

                <button className="transition hover:text-pink-600 flex items-center gap-4">
                    <FaUserAstronaut size={18} />
                    Modo anonimo
                </button>

                {userData && (
                    <button title="Logout (Sair)" className="transition hover:text-pink-600 flex items-center gap-4" onClick={Logout}>
                        <AiOutlineLogout size={18} />
                        Sair da conta
                    </button>
                )}
            </div>
        </ConfigAccordion>
    )
}