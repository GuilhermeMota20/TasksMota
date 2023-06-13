import { collection, query, where } from "firebase/firestore";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../../Firebase";
import LayoutPage from "../../components/Utilities/LayoutPage";

export default function DirTasks({ dir }) {
    const userData = auth.currentUser;

    const route = useRouter();
    const currentPath = route.asPath;
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
            <Head>
                <title>ToDoTask. | Diretorio {dir}</title>
            </Head>

            <LayoutPage title={`Diretorio ${dir} ( ${dirTasks.length} )`} tasks={dirTasks} error={error} isLoading={isLoading} />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const { dir } = params;

    return {
        props: {
            dir,
        }
    };
};