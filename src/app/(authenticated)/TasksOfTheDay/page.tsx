'use client'
const { format } = require('date-fns');
import { collection, DocumentData, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import LayoutTasks from "../../components/Utilities/LayoutTasks";
import { auth, db } from "../../services/Firebase";
import { Tasks } from "../../types/Task";
import { AiOutlineFire } from "react-icons/ai";

export default function TasksOfTheDay() {
  const userData = auth.currentUser;
  const currentDate = new Date();

  const ref = collection(db, 'tasks');
  if (userData?.uid) {
    var currentUser = where('userUid', '==', userData.uid);
  };

  const formattedDate = format(currentDate, 'yyyy-MM-dd');

  const filteredForTasksOfTheDay = query(ref, currentUser, where('date', '==', formattedDate));
  const [value, isLoading, error] = useCollection(filteredForTasksOfTheDay, {
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
        title={`Tarefas do dia ( ${allTasks.length} )`}
        icon={<AiOutlineFire size={24} style={{ fontWeight: 'bold' }} />}
        tasks={allTasks}
        isLoading={isLoading}
        error={error}
      />
    </>
  );
}