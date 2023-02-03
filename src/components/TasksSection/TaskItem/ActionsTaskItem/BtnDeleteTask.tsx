import { FaTrashAlt } from 'react-icons/fa';

interface BtnDeleteTaskProps {
    taskId: string;
}

export default function BtnDeleteTask({ taskId }: BtnDeleteTaskProps) {
    const removeTaskHandler = () => {

    }
    
    return (
        <>
            {/* {showModal && (
                <ModalConfirm
                    onClose={() => setIsModalShown(false)}
                    text="This task will be deleted permanently."
                    onConfirm={removeTaskHandler}
                />
            )} */}
            <button
                title="Deletar tarefa"
                className="ml-2 transition hover:text-slate-700"
            // onClick={() => setIsModalShown(true)}
            >
                <FaTrashAlt className="text-md sm:text-lg" />
            </button>
        </>
    )
}