import { collection, DocumentData } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "../../Firebase";
import { Tasks } from "../../types/Task";
import LayoutTasks from "../Utilities/LayoutTasks";

export default function TasksSection() {
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
        <LayoutTasks
            title=""
            tasks={allTasks}
            isLoading={isLoading}
            error={error}
        />
    )
};