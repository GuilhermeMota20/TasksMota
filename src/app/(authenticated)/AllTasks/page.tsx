'use client'
import { collection, DocumentData, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import LayoutTasks from "../../components/Utilities/LayoutTasks";
import { auth, db } from "../../services/Firebase";
import { Tasks } from "../../types/Task";
import { GoHome } from "react-icons/go";

export default function AllTasks() {
  const userData = auth.currentUser;

  const ref = collection(db, 'tasks');
  if (userData?.uid) {
    var queryRef = query(ref, where('userUid', '==', userData.uid))
  };

  const [value, isLoading, error] = useCollection(queryRef, {
    snapshotListenOptions: {
      includeMetadataChanges: true,
    }
  });

  const allTasks: Array<Tasks | DocumentData> = [];
  value?.docs.map((doc) => {
    allTasks?.push({
      ...doc?.data(),
      id: doc?.id,
    });
  });

  return (
    <>
      <LayoutTasks
        title={`Todas as tarefas ( ${allTasks.length} )`}
        icon={<GoHome size={24} style={{ fontWeight: 'bold' }} />}
        tasks={allTasks}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
};