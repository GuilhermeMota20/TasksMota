import { collection, DocumentData, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import LayoutTasks from "../../components/Utilities/LayoutTasks";
import { auth, db } from "../../services/Firebase";
import { Tasks } from "../../types/Task";

export default async function AllTasks() {
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
      <LayoutTasks
        title={`Todas as tarefas ( ${allTasks.length} )`}
        tasks={allTasks}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};