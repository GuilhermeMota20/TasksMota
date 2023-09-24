import { collection, DocumentData, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Tasks } from '../../types/Task';
import { auth, db } from '../Firebase';

export const useDirectorys = () => {
  const [directorys, setDirectorys] = useState<Array<Tasks | DocumentData>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const userData = auth.currentUser;

    if (userData?.uid) {
      const refDir = collection(db, 'directories');
      const currentUser = where('userUid', '==', userData.uid);
      const directorysQuery = query(refDir, currentUser);

      const fetchDirectorys = onSnapshot(directorysQuery, (querySnapshot) => {
        const directorysArray: Array<Tasks | DocumentData> = [];
        querySnapshot.forEach((doc) => {
          directorysArray.push({
            ...doc.data(),
            id: doc.id,
          });
        });

        setDirectorys(directorysArray);
        setIsLoading(false);
        setError(null);
      });

      return () => {
        fetchDirectorys();
      };
    };
  }, []);

  return { directorys, isLoading, error };
};
