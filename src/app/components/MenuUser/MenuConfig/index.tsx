import { collection, deleteDoc, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { RxGear } from "react-icons/rx";
import { useAuth } from "../../../context/AuthContext";
import { auth, db } from "../../../services/Firebase";
import { AlertType } from "../../../types/Alert";
import ModalConfirm from "../../Modals/ModalConfirm";
import Alert from "../../Utilities/Alert";
import Divider from "../../Utilities/Divider";
import ConfigUser from "./ConfigUser";
import DarkMode from "./DarkMode";
import HeaderConfig from "./HeaderConfig";
import { useRouter } from "next/navigation";

export default function MenuUserConfig() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [showMenuConfig, setShowMenuConfig] = useState(false);
  const [alert, setAlert] = useState<AlertType | null>(null);
  const [showModal, setIsModalShown] = useState(false);
  const [showModalDeleteAllTasks, setShowModalDeleteAllTasks] = useState(false);
  const [showModalDeleteCurrentUser, setShowModalDeleteCurrentUser] = useState(false);
  const { Logout } = useAuth();
  const router = useRouter();

  const userData = auth.currentUser;

  const toggleMenuConfig = () => setShowMenuConfig((prev) => !prev);

  const handleLogout = () => {
    Logout();
  };

  const handleDeleteAllTasks = async () => {
    setAlert(null);
    setShowModalDeleteAllTasks(false);
    toggleMenuConfig();

    try {
      const ref = collection(db, 'tasks');
      if (userData?.uid) {
        var queryRef = query(ref, where('userUid', '==', userData.uid))
      };

      const querySnapshot = await getDocs(queryRef);

      if (querySnapshot?.size <= 0)
        return setAlert({ type: 'error', message: `Não existe nenhma tarefa a ser excluida no momento.` });

      querySnapshot?.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });

      setAlert({ type: 'success', message: `Todas as tarefas foram excluídas com sucesso.` });
    } catch (error) {
      setAlert({ type: 'error', message: `Erro ao excluir as tarefas. Tente novamente mais tarde.` });
    };
  };

  const handleDeleteCurrentUser = () => {
    setAlert(null);
    setShowModalDeleteCurrentUser(false);
    toggleMenuConfig();

    userData.delete()
      .then(() => {
        handleDeleteAllTasks();
        handleLogout();
        router.push('/');
      }).catch(() => {
        setAlert({ type: 'error', message: `Erro ao excluir seu acesso. Tente novamente mais tarde.` });
      });
  };

  return (
    <>
      {alert && (
        <Alert type={alert.type} message={alert.message} />
      )}

      <button
        className="bg-white p-2 rounded-md transition hover:shadow-md dark:bg-darkBlue-700"
        onClick={toggleMenuConfig}
      >
        <RxGear />
      </button>

      <section className={`fixed top-0 right-0 h-full w-72 p-4 z-20 ease-in-out opacity-0 transition-transform duration-300  ${showMenuConfig ? 'translate-x-0 opacity-100' : 'translate-x-full'}`} >
        <div className="bg-slate-100 dark:bg-darkBlue-800 rounded-md flex flex-col gap-2 h-full w-full">
          <HeaderConfig />

          <div className="px-4 mt-[5rem] text-center">
            <strong className="line-clamp-1">{!userData?.displayName ? 'Anonymous' : userData?.displayName}</strong>
            <p className="line-clamp-1">{userData?.email}</p>
          </div>

          <div className="mt-4">
            <Divider />
          </div>

          <div className="flex flex-col gap-8 mt-4">
            <ConfigUser
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              showModalLogout={() => setIsModalShown(true)}
              showModalDeleteAllTasks={() => setShowModalDeleteAllTasks(true)}
              showModalDeleteCurrentUser={() => setShowModalDeleteCurrentUser(true)}
            />

            <DarkMode
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />

          </div>
        </div>
      </section>

      {showModal && (
        <ModalConfirm
          onClose={() => setIsModalShown(false)}
          text="Você será desconectado da sua conta atual."
          onConfirm={handleLogout}
        />
      )}

      {showModalDeleteAllTasks && (
        <ModalConfirm
          onClose={() => setShowModalDeleteAllTasks(false)}
          text="Você tem certeza de que deseja apagar todas as suas tarefas? Uma vez feita, não será possível recuperá-las novamente."
          onConfirm={handleDeleteAllTasks}
        />
      )}

      {showModalDeleteCurrentUser && (
        <ModalConfirm
          onClose={() => setShowModalDeleteCurrentUser(false)}
          text="Você tem certeza de que deseja deletar seu acesso? Uma vez feita, não será possível recuperá-la novamente e todas suas informações serão perdidas."
          onConfirm={handleDeleteCurrentUser}
        />
      )}

      {showMenuConfig && (
        <div
          className="fixed bg-slate-600/[.2] w-full h-full z-10 top-0 left-0 backdrop-blur-sm"
          onClick={toggleMenuConfig}
        ></div>
      )}
    </>
  )
}