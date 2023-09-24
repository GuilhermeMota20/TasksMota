import { collection, DocumentData, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Tasks } from '../../types/Task';
import { auth, db } from '../Firebase';
const { format } = require('date-fns');

export const useTasksOfTheDay = () => {
  const [tasksOfTheDay, setTasksOfTheDay] = useState<Array<Tasks | DocumentData>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const userData = auth.currentUser;

    if (userData?.uid) {
      const currentDate = new Date();
      const formattedDate = format(currentDate, 'yyyy-MM-dd');

      const ref = collection(db, 'tasks');
      const currentUser = where('userUid', '==', userData.uid);
      const isTasksOfTheDay = where('date', '==', formattedDate);
      const tasksOfTheDayQuery = query(ref, currentUser, isTasksOfTheDay);

      const fetchTasksOfTheDay = onSnapshot(tasksOfTheDayQuery, (querySnapshot) => {
        const tasksArray: Array<Tasks | DocumentData> = [];
        querySnapshot.forEach((doc) => {
          tasksArray.push({
            ...doc.data(),
            id: doc.id,
          });
        });

        setTasksOfTheDay(tasksArray);
        setIsLoading(false);
        setError(null);
      });

      return () => {
        fetchTasksOfTheDay();
      };
    };
  }, []);

  return { tasksOfTheDay, isLoading, error };
};
