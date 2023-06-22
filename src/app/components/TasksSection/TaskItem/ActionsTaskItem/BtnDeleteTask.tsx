import { deleteDoc, doc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { db } from '../../../../services/Firebase';
import ModalConfirm from '../../../Modals/ModalConfirm';
import { AlertType } from '../../../../types/Alert';
import Alert from '../../../Utilities/Alert';

interface BtnDeleteTaskProps {
  taskId: string;
};

export default function BtnDeleteTask({ taskId }: BtnDeleteTaskProps) {
  const [showModal, setIsModalShown] = useState(false);
  const [alert, setAlert] = useState<AlertType | null>(null);

  const handleDelete = () => {
    setAlert(null);

    deleteDoc(doc(db, 'tasks', taskId))
      .then(() => setAlert({ type: 'success', message: `Tarefa excluida com sucesso!` }))
      .catch(() => setAlert({ type: 'error', message: 'Nao foi possivel excluir a tarefa! Por favor, tente novamente.' }));
  };

  return (
    <>
      {alert && (
        <Alert type={alert.type} message={alert.message} />
      )}

      {showModal && (
        <ModalConfirm
          onClose={() => setIsModalShown(false)}
          text="Essa tarefa será deletada permanentemente."
          onConfirm={handleDelete}
        />
      )}

      <button
        title="Deletar tarefa"
        className="ml-2 transition hover:text-slate-700"
        onClick={() => setIsModalShown(true)}
      >
        <FaTrashAlt className="text-md sm:text-lg" />
      </button>
    </>
  )
}