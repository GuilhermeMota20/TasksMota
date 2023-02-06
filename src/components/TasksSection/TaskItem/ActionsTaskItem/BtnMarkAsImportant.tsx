import { doc, updateDoc } from "firebase/firestore";
import { BsStarFill } from "react-icons/bs";
import { db } from "../../../../Firebase";

interface BtnMarkAsImportantPorps {
    taskId: string;
    taskImportant: boolean;
};

export default function BtnMarkAsImportant({ taskId, taskImportant }: BtnMarkAsImportantPorps) {
    const handleMarkAsImportant = () => {
        const docRef = doc(db, 'tasks', taskId);

        updateDoc(docRef, {
            important: taskImportant ? false : true 
        });

        console.log('status mudou', taskId);
    };

    return (
        <button
            title={`${taskImportant ? 'Desmarca como importante' : 'Marcar como importante'}`}
            className="transition hover:text-slate-700 ml-auto"
            onClick={handleMarkAsImportant}
        >
            <BsStarFill className={`text-md sm:text-lg ${taskImportant ? 'fill-yellow-500' : ''}`} />
        </button>
    )
}