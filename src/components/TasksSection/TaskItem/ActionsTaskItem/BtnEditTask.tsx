import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { SlOptionsVertical } from 'react-icons/sl';
import { db } from "../../../../Firebase";
import { Tasks } from "../../../../types/Task";
import ModalNewTasks from "../../../Modals/ModalNewTasks";

interface BtnEditTaskProps {
    task: Tasks;
}

export default function BtnEditTask({ task }: BtnEditTaskProps) {
    const [modalEditTaskOpen, setModalEditTaskOpen] = useState(false);
    const showModalEditTask = () => modalEditTaskOpen ? setModalEditTaskOpen(false) : setModalEditTaskOpen(true);

    const editTaskHandler = (task: Tasks) => {
        const ref = doc(db, 'tasks', task.id);

        updateDoc(ref, {
            ...task
        });
    };

    return (
        <>
            <button
                title="Editar tarefa"
                className="transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center hover:text-slate-700"
                onClick={showModalEditTask}
            >
                <SlOptionsVertical className="text-md sm:text-lg" />
            </button>

            {modalEditTaskOpen && (
                <ModalNewTasks
                    onClose={showModalEditTask}
                    task={task}
                    nameForm="Editar tarefa"
                    onConfirm={editTaskHandler}
                />
            )}
        </>
    )
}