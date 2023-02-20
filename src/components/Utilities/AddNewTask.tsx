import ModalNewTasks from "../Modals/ModalNewTasks";
import { useState } from 'react';

interface AddNewTaskProps {
    className?: string;
}

export default function AddNewTask({ className }: AddNewTaskProps) {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => showModal ? setShowModal(false) : setShowModal(true);

    return (
        <>
            <button
                className={`px-4 py-3 bg-pink-600 text-white transition rounded-md hover:bg-pink-700 dark:shadow-transparent ${className}`}
                onClick={toggleModal}
            >
                Add nova tarefa
            </button>

            {showModal && (
                <ModalNewTasks onClose={toggleModal} nameForm='Adicionar nova tarefa' />
            )}
        </>
    )
}