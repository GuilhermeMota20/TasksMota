import { collection, DocumentData, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import LayoutPage from "../../components/Utilities/LayoutPage";
import { db } from "../../Firebase";
import { Tasks } from "../../types/Task";

export default function CompletedTasks() {
    const ref = collection(db, 'tasks');
    const filteredForCompleted = query(ref, where('completed', '==', true));

    const [value, isLoading, error] = useCollection(filteredForCompleted, {
        snapshotListenOptions: {
            includeMetadataChanges: true,
        }
    });

    const CompletedTasks: Array<Tasks | DocumentData> = [];

    value?.docs.map((doc) => {
        CompletedTasks.push({
            ...doc.data(),
            id: doc.id,
        });
    });

    return (
        <LayoutPage title={`Tarefas concluídas ( ${CompletedTasks.length} )`} tasks={CompletedTasks} error={error} isLoading={isLoading} />
    )
}