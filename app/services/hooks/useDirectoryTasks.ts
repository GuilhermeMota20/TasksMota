import { collection, DocumentData, onSnapshot, query, where } from 'firebase/firestore';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Tasks } from '../../types/Task';
import { auth, db } from '../Firebase';

export const useDirectoryTasks = () => {
  const [directoryTasks, setDirectoryTasks] = useState<Array<Tasks | DocumentData>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const pathName = usePathname();
  const formattedPath = pathName.split("/").pop();

  useEffect(() => {
    const userData = auth.currentUser;

    if (userData?.uid) {
      const ref = collection(db, 'tasks');
      const currentUser = where('userUid', '==', userData.uid);
      const isDirectory =  where('dir', '==', formattedPath);
      const directoryTasksQuery = query(ref, currentUser, isDirectory);

      const fetchDirectoryTasks = onSnapshot(directoryTasksQuery, (querySnapshot) => {
        const tasksArray: Array<Tasks | DocumentData> = [];
        querySnapshot.forEach((doc) => {
          tasksArray.push({
            ...doc.data(),
            id: doc.id,
          });
        });

        setDirectoryTasks(tasksArray);
        setIsLoading(false);
        setError(null);
      });

      return () => {
        fetchDirectoryTasks();
      };
    };
  }, [formattedPath]);

  return { directoryTasks, isLoading, error };
};
