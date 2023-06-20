import { doc, updateDoc } from "firebase/firestore";
import { BsStarFill } from "react-icons/bs";
import { db } from "../../../../services/Firebase";
import { useEffect, useState } from "react";
import { AlertType } from "../../../../types/Alert";
import Alert from "../../../Utilities/Alert";

interface BtnMarkAsImportantPorps {
    taskId: string;
    taskImportant: boolean;
};

export default function BtnMarkAsImportant({ taskId, taskImportant }: BtnMarkAsImportantPorps) {
    const [alert, setAlert] = useState<AlertType | null>(null);

    const handleMarkAsImportant = () => {
        const docRef = doc(db, 'tasks', taskId);
        setAlert(null);

        updateDoc(docRef, {
            important: taskImportant ? false : true
        }).then(() => setAlert({
            type: 'success',
            message: !taskImportant
                ? `Tarefa foi marcada como importante!`
                : 'Marcacao de "importante" foi removida da tarefa.'
        })).catch(() => setAlert({
            type: 'error',
            message: !taskImportant
                ? 'Nao foi possivel marcar tarefa como importante! Por favor, tente novamente.'
                : 'Nao foi possivel remover marcacao de "importante"! Por favor, tente novamente.'
        }));
    };

    return (
        <>
            {alert && (
                <Alert type={alert.type} message={alert.message} />
            )}

            <button
                title={`${taskImportant ? 'Desmarca como importante' : 'Marcar como importante'}`}
                className="transition hover:text-slate-700 ml-auto"
                onClick={handleMarkAsImportant}
            >
                <BsStarFill className={`text-md sm:text-lg ${taskImportant ? 'fill-yellow-500' : ''}`} />
            </button>
        </>
    )
}