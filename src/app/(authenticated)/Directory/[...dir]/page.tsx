'use client'
import { collection, query, where } from "firebase/firestore";
import { usePathname } from "next/navigation";
import { useCollection } from "react-firebase-hooks/firestore";
import { AiOutlineBranches } from "react-icons/ai";
import LayoutTasks from "../../../components/Utilities/LayoutTasks";
import { auth, db } from "../../../services/Firebase";

export default function DirTasks({ params }: { params: { dir: string } }) {
  const userData = auth.currentUser;

  const pathName = usePathname();
  const formattedPath = pathName.split("/").pop();

  const refTasks = collection(db, 'tasks');
  if (userData?.uid) {
    var currentUser = where('userUid', '==', userData.uid)
  };
  
  const queTasks = query(refTasks, currentUser, where('dir', '==', formattedPath));
  const [value, isLoading, error] = useCollection(queTasks, {
    snapshotListenOptions: {
      includeMetadataChanges: true,
    }
  });

  const dirTasks = [];
  value?.docs.map((doc) => {
    dirTasks.push({
      ...doc.data(),
      id: doc.id,
    });
  });

  return (
    <>
      <LayoutTasks
        title={`Todas as tarefas ${params?.dir} ( ${dirTasks.length} )`}
        icon={<AiOutlineBranches size={24} style={{ fontWeight: 'bold' }} />}
        tasks={dirTasks}
        isLoading={isLoading}
        error={error}
      />
    </>
  )
}