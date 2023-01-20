import { SlOptionsVertical } from 'react-icons/sl';
import { Tasks } from "../../../../types/Task";

interface BtnEditTaskProps {
    task: Tasks;
}

export default function BtnEditTask({ task }: BtnEditTaskProps) {
    return (
        <>
            <button
                title="edit task"
                className="transition w-7 sm:w-8 h-6 sm:h-8 grid place-items-center hover:text-slate-700"
            // onClick={openModalEditTask}
            >
                <SlOptionsVertical className="text-md sm:text-lg" />
            </button>

            {/* {modalEditTaskOpen && (
                <ModalCreateTask
                    onClose={closeModalEditTask}
                    task={task}
                    nameForm="Edit task"
                    onConfirm={editTaskHandler}
                />
            )} */}
        </>
    )
}