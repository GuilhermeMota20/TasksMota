import { collection, DocumentData, query, where } from "firebase/firestore";
import Head from "next/head";
import { useCollection } from "react-firebase-hooks/firestore";
import LayoutPage from "../../components/Utilities/LayoutPage";
import { auth, db } from "../../Firebase";
import { Tasks } from "../../types/Task";

export default function AllTasks() {
    const userData = auth.currentUser;

    const ref = collection(db, 'tasks');
    const queryRef = query(ref, where('userUid', '==', userData.uid))

    const [value, isLoading, error] = useCollection(queryRef, {
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
            <Head>
                <title>ToDoTask. | Todas as tarefas</title>
            </Head>
            <LayoutPage title={`Todas as tarefas ( ${allTasks.length} )`} tasks={allTasks} error={error} isLoading={isLoading} />
        </>
    );
};