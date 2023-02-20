import { collection, DocumentData } from "firebase/firestore";
import Head from "next/head";
import { useCollection } from "react-firebase-hooks/firestore";
import LayoutPage from "../../components/Utilities/LayoutPage";
import { db } from "../../Firebase";
import { Tasks } from "../../types/Task";

export default function AllTasks() {
    const ref = collection(db, 'tasks');
    const [value, isLoading, error] = useCollection(ref, {
        snapshotListenOptions: {
            includeMetadataChanges: true,
        }
    });

    const allTasks: Array<Tasks | DocumentData> = [];
    value?.docs.map((doc) => {
        allTasks.push({
            ...doc.data(),
            id: doc.id,
        });
    });

    return (
        <>
            <Head>ToDoTask. | Todas as tarefas</Head>
            <LayoutPage title={`Todas as tarefas ( ${allTasks.length} )`} tasks={allTasks} error={error} isLoading={isLoading} />
        </>
    );
};