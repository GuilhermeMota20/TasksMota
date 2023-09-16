'use client'
import { collection, DocumentData, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { MdOutlineRunningWithErrors } from "react-icons/md";
import LayoutTasks from "../../components/Utilities/LayoutTasks";
import { auth, db } from "../../services/Firebase";
import { Tasks } from "../../types/Task";
import Head from "./head";

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
      <Head />
      <LayoutTasks
        title={`Tarefas incompletas ( ${UncompletedTasks.length} )`}
        icon={<MdOutlineRunningWithErrors size={24} style={{ fontWeight: 'bold' }} />}
        tasks={UncompletedTasks}
        isLoading={isLoading}
        error={error}
      />
    </>
  )
}