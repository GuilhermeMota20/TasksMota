import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

interface BtnToggleCompletedProps {
    taskCompleted: boolean;
    taskId: string;
    isListInView: boolean;
}

export default function BtnToggleCompleted({ isListInView, taskCompleted, taskId }: BtnToggleCompletedProps) {
    return (
        <button
            title={`${taskCompleted ? 'Marcar como incompleta' : 'Marcar como completa'}`}
            className={`${taskCompleted ? 'bg-emerald-200 text-emerald-800' : 'bg-amber-200 text-amber-800'} ${isListInView ? 'mr-4' : 'mr-4 order-0'} rounded-md font-medium`}
            // onClick={}
        >
            <span className="block py-1 px-3 absolute invisible sm:static sm:visible">
                {taskCompleted ? 'Completa' : 'Incompleta'}
            </span>

            <span className="sm:hidden w-6 h-6 grid place-items-center">
                {taskCompleted ? (
                    <AiOutlineCheck className="text-md" />
                ) : (
                    <AiOutlineClose className="text-md" />
                )}
            </span>
        </button>
    )
}