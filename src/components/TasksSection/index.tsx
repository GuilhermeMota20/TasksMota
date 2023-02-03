import { collection, DocumentData } from "firebase/firestore";
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "../../Firebase";
import { Tasks } from "../../types/Task";
import LayoutTasks from "../Utilities/LayoutTasks";

export default function TasksSection() {
    // const tasksConverter: FirestoreDataConverter<formatedTasksProps> = {
    //     toFirestore(tasks: WithFieldValue<formatedTasksProps>): DocumentData {
    //         return {
    //             title: tasks.title,
    //             description: tasks.description,
    //             date: tasks.date,
    //             completed: tasks.completed,
    //             important: tasks.important,
    //             dir: tasks.dir,
    //         };
    //     },
    //     fromFirestore(snapshot: QueryDocumentSnapshot, options: SnapshotOptions): formatedTasksProps {
    //         const data = snapshot.data(options);
    //         return {
    //             ref: snapshot.ref,
    //             id: snapshot.id,
    //             title: data.title,
    //             description: data.description,
    //             date: data.date,
    //             completed: data.completed,
    //             important: data.important,
    //             dir: data.dir,
    //         };
    //     }
    // };

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
            <LayoutTasks
                title=""
                tasks={allTasks}
                isLoading={isLoading}
                error={error}
            />

            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {isLoading && <span>Collection: Loading...</span>}
        </>
    )
};