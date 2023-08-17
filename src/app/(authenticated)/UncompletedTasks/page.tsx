'use client'
import { collection, DocumentData, query, where } from "firebase/firestore";
import Head from "next/head";
import { useCollection } from "react-firebase-hooks/firestore";
import LayoutTasks from "../../components/Utilities/LayoutTasks";
import { auth, db } from "../../services/Firebase";
import { Tasks } from "../../types/Task";

export default function UncompletedTasks() {
  const userData = auth.currentUser;

  const ref = collection(db, 'tasks');
  if (userData?.uid) {
    var currentUser = where('userUid', '==', userData.uid);
  };

  const filteredForUncompleted = query(ref, currentUser, where('completed', '==', false));
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
      <LayoutTasks
        title={`Tarefas incompletas ( ${UncompletedTasks.length} )`}
        tasks={UncompletedTasks}
        isLoading={isLoading}
        error={error}
      />
    </>
  )
}