import { collection, DocumentData, query, where } from "firebase/firestore";
import Head from "next/head";
import { useCollection } from "react-firebase-hooks/firestore";
import LayoutPage from "../../components/Utilities/LayoutPage";
import { auth, db } from "../../Firebase";
import { Tasks } from "../../types/Task";

export default function CompletedTasks() {
    const userData = auth.currentUser;

    const ref = collection(db, 'tasks');
    const currentUser = where('userUid', '==', userData.uid)
    const filteredForCompleted = query(ref, currentUser, where('completed', '==', true));

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
        <>
            <Head>
                <title>ToDoTask. | Tarefas concluídas</title>
            </Head>
            <LayoutPage title={`Tarefas concluídas ( ${CompletedTasks.length} )`} tasks={CompletedTasks} error={error} isLoading={isLoading} />
        </>
    )
}