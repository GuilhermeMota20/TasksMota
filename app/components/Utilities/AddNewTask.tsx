import { useState } from 'react';
import { AlertType } from '../../types/Alert';
import ModalNewTasks from "../Modals/ModalNewTasks";
import Alert from "./Alert";

interface AddNewTaskProps {
  className?: string;
};

export default function AddNewTask({ className }: AddNewTaskProps) {
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState<AlertType | null>(null);

  const toggleModal = () => showModal ? setShowModal(false) : setShowModal(true);

  return (
    <>
      {alert && (
        <Alert type={alert.type} message={alert.message} />
      )}

      <button
        className={`px-4 py-3 bg-pink-600 text-white transition rounded-md hover:bg-pink-700 dark:shadow-transparent ${className}`}
        onClick={toggleModal}
      >
        Add nova tarefa
      </button>

      {showModal && (
        <ModalNewTasks
          nameForm='Adicionar nova tarefa'
          onClose={toggleModal}
          setAlert={setAlert}
        />
      )}
    </>
  )
}