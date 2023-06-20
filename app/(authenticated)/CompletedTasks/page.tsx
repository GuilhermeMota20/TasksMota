import { collection, DocumentData, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import LayoutTasks from "../../components/Utilities/LayoutTasks";
import { auth, db } from "../../services/Firebase";
import { Tasks } from "../../types/Task";

export default async function CompletedTasks() {
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
      <LayoutTasks
        title={`Tarefas concluídas ( ${CompletedTasks.length} )`}
        tasks={CompletedTasks}
        isLoading={isLoading}
        error={error}
      />
    </>
  )
}