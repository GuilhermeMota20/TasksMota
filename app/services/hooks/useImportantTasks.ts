import { collection, DocumentData, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Tasks } from '../../types/Task';
import { auth, db } from '../Firebase';

export const useImportantTasks = () => {
  const [importantTasks, setImportantTasks] = useState<Array<Tasks | DocumentData>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const userData = auth.currentUser;

    if (userData?.uid) {
      const ref = collection(db, 'tasks');
      const currentUser = where('userUid', '==', userData.uid);
      const isImportant = where('important', '==', true);
      const importantTasksQuery = query(ref, currentUser, isImportant);

      const fetchImportantTasks = onSnapshot(importantTasksQuery, (querySnapshot) => {
        const tasksArray: Array<Tasks | DocumentData> = [];
        querySnapshot.forEach((doc) => {
          tasksArray.push({
            ...doc.data(),
            id: doc.id,
          });
        });

        setImportantTasks(tasksArray);
        setIsLoading(false);
        setError(null);
      });

      return () => {
        fetchImportantTasks();
      };
    };
  }, []);

  return { importantTasks, isLoading, error };
};
