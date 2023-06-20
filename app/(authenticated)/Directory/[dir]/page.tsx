import { collection, query, where } from "firebase/firestore";
import { usePathname } from "next/navigation";
import { useCollection } from "react-firebase-hooks/firestore";
import LayoutTasks from "../../../components/Utilities/LayoutTasks";
import { auth, db } from "../../../services/Firebase";

export default async function DirTasks(
  { params }: { params: { dir: string } }
) {
  const userData = auth.currentUser;

  const pathName = usePathname();
  const currentPath = pathName;
  const formattedPath = currentPath.split("/").pop();

  const refTasks = collection(db, 'tasks');
  const currentUser = where('userUid', '==', userData.uid)
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
        tasks={dirTasks}
        isLoading={isLoading}
        error={error}
      />
    </>
  )
}