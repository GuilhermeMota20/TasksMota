import { deleteDoc, doc } from 'firebase/firestore';
import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { db } from '../../../../Firebase';
import ModalConfirm from '../../../Modals/ModalConfirm';

interface BtnDeleteTaskProps {
    taskId: string;
}

export default function BtnDeleteTask({ taskId }: BtnDeleteTaskProps) {
    const [showModal, setIsModalShown] = useState<boolean>(false);

    const handleDelete = () => {
        deleteDoc(doc(db, 'tasks', taskId));
        console.log('deletada:', taskId);
    };

    return (
        <>
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