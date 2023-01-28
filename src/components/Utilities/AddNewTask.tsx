import ModalNewTasks from "../Modals/ModalNewTasks";
import { useState } from 'react';

interface AddNewTaskProps {
    className?: string;
}

export default function AddNewTask({ className }: AddNewTaskProps) {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => showModal ? setShowModal(false) : setShowModal(true);
    const openModal = () => !showModal ? setShowModal(true) : setShowModal(false);

    return (
        <>
            <button
                className={`px-4 py-3 bg-pink-600 text-white transition rounded-md hover:bg-pink-700 ${className}`}
                onClick={openModal}
            >
                Add nova tarefa
            </button>

            {showModal && (
                <ModalNewTasks onClose={closeModal} nameForm='Adicionar nova tarefa' />
            )}
        </>
    )
}