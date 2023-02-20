import { collection, DocumentData, query, where } from "firebase/firestore";
import Head from "next/head";
import { useCollection } from "react-firebase-hooks/firestore";
import LayoutPage from "../../components/Utilities/LayoutPage";
import { db } from "../../Firebase";
import { Tasks } from "../../types/Task";

export default function UncompletedTasks() {
    const ref = collection(db, 'tasks');
    const filteredForUncompleted = query(ref, where('completed', '==', false));

    const [value, isLoading, error] = useCollection(filteredForUncompleted, {
        snapshotListenOptions: {
            includeMetadataChanges: true,
        }
    });

    const UncompletedTasks: Array<Tasks | DocumentData> = [];

    value?.docs.map((doc) => {
        UncompletedTasks.push({
            ...doc.data(),
            id: doc.id,
        });
    });

    return (
        <>
            <Head>
                <title>ToDoTask. | Tarefas incompletas</title>
            </Head>
            <LayoutPage title={`Tarefas incompletas ( ${UncompletedTasks.length} )`} tasks={UncompletedTasks} error={error} isLoading={isLoading} />
        </>
    )
}