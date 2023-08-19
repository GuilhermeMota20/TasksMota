'use client'
const { format } = require('date-fns');
import { collection, DocumentData, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import LayoutTasks from "../../components/Utilities/LayoutTasks";
import { auth, db } from "../../services/Firebase";
import { Tasks } from "../../types/Task";

export default function ImportantTasks() {
  const userData = auth.currentUser;

  const ref = collection(db, 'tasks');
  if (userData?.uid) {
    var currentUser = where('userUid', '==', userData.uid);
  };

  const filteredForImportant = query(ref, currentUser, where('important', '==', true));
  const [value, isLoading, error] = useCollection(filteredForImportant, {
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
        title={`Tarefas importantes ( ${allTasks.length} )`}
        tasks={allTasks}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}