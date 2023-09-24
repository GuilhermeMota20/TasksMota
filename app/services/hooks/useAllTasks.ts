import { useEffect, useState } from 'react';
import { collection, DocumentData, query, where, getDocs, onSnapshot } from 'firebase/firestore';
import { Tasks } from '../../types/Task';
import { auth, db } from '../Firebase';

export const useAllTasks = () => {
  const [allTasks, setAllTasks] = useState<Array<Tasks | DocumentData>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const userData = auth.currentUser;

    if (userData?.uid) {
      const ref = collection(db, 'tasks');
      const currentUser = where('userUid', '==', userData.uid);
      const allTasksQuery = query(ref, currentUser);

      const fetchAllTasks = onSnapshot(allTasksQuery, (querySnapshot) => {
        const tasksArray: Array<Tasks | DocumentData> = [];
        querySnapshot.forEach((doc) => {
          tasksArray.push({
            ...doc.data(),
            id: doc.id,
          });
        });
  
        setAllTasks(tasksArray);
        setIsLoading(false);
        setError(null);
      });

      return () => {
        fetchAllTasks();
      };
    };
  }, []);

  return { allTasks, isLoading, error };
};
