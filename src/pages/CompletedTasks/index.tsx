import { collection, DocumentData, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import Header from "../../components/Header";
import TasksSection from "../../components/TasksSection";
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
        <section className="text-slate-600 pt-5 pb-8 sm:pb-16 px-4 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen flex flex-col gap-6">
            <Header />
            <TasksSection allTasks={CompletedTasks} error={error} isLoading={isLoading} />
        </section>
    )
}