import { collection, DocumentData, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Tasks } from '../../types/Task';
import { auth, db } from '../Firebase';

export const useStatusTasks = (
  isCompletedTask: boolean,
) => {
  const [tasks, setTasks] = useState<Array<Tasks | DocumentData>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const userData = auth.currentUser;

    if (userData?.uid) {
      const ref = collection(db, 'tasks');
      const currentUser = where('userUid', '==', userData.uid);
      const isCompleted = where('completed', '==', isCompletedTask);
      const tasksStatusQuery = query(ref, currentUser, isCompleted);

      const fetchTasksStatus = onSnapshot(tasksStatusQuery, (querySnapshot) => {
        const tasksArray: Array<Tasks | DocumentData> = [];
        querySnapshot.forEach((doc) => {
          tasksArray.push({
            ...doc.data(),
            id: doc.id,
          });
        });

        setTasks(tasksArray);
        setIsLoading(false);
        setError(null);
      });

      return () => {
        fetchTasksStatus();
      };
    };
  }, []);

  return { tasks, isLoading, error };
};
