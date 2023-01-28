import { useState } from "react";
import { SlOptionsVertical } from 'react-icons/sl';
import { Tasks } from "../../../../types/Task";
import ModalNewTasks from "../../../Modals/ModalNewTasks";

interface BtnEditTaskProps {
    task: Tasks;
}

export default function BtnEditTask({ task }: BtnEditTaskProps) {
    const [modalEditTaskOpen, setModalEditTaskOpen] = useState<boolean>(false);
    const closeModalEditTask = () => setModalEditTaskOpen(false);
    const openModalEditTask = () => setModalEditTaskOpen(true);

    return (
        <>
            <button
                title="edit task"
                className="transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center hover:text-slate-700"
                onClick={openModalEditTask}
            >
                <SlOptionsVertical className="text-md sm:text-lg" />
            </button>

            {modalEditTaskOpen && (
                <ModalNewTasks
                    onClose={closeModalEditTask}
                    task={task}
                    nameForm="Editar tarefa"
                // onConfirm={editTaskHandler}
                />
            )}
        </>
    )
}