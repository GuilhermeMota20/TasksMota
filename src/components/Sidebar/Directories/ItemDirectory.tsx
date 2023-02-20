import { collection, deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { db } from "../../../Firebase";
import ModalConfirm from "../../Modals/ModalConfirm";


interface DirectryType {
    id: string;
    dir: string;
};

interface DirectoryProps {
    directory: DirectryType;
    classActive: string;
};

export default function ItemDirectory({ directory, classActive }: DirectoryProps) {
    const route = useRouter();
    const currentPath = route.asPath;
    const formattedPath = currentPath.split("/").pop();

    const [modalIsShown, setModalIsShown] = useState(false);
    const showModal = () => modalIsShown ? setModalIsShown(false) : setModalIsShown(true);

    const handleDeletedDir = () => {
        const refAllDir = collection(db, 'tasks');
        const q = query(refAllDir, where('dir', '==', directory.dir));

        deleteDoc(doc(db, 'directories', directory.id));

        onSnapshot(q, (snapshot) => {
            snapshot.docs.forEach((task) => {
                deleteDoc(doc(db, 'tasks', task.id));
            });
        });
    };

    return (
        <>
            {modalIsShown && (
                <ModalConfirm
                    text="Esse diretorio sera excluido para sempre, incluindo todas as tarefas vinculadas a ele!"
                    onClose={showModal}
                    onConfirm={handleDeletedDir}
                />
            )}

            <li className={`flex items-center px-4 py-2 cursor-pointer transition hover:bg-slate-200 dark:hover:text-slate-200 dark:hover:bg-transparent ${formattedPath === directory.dir ? classActive : ''}`}>
                <Link href={`/Directory/${directory.dir}`} className="flex items-center gap-4">
                    {directory.dir}
                </Link>

                {directory.dir !== 'master' && (
                    <div className="ml-auto flex items-center gap-4 xl:opacity-0 transition opacity-100 hover:xl:opacity-100">
                        <button
                            title="Deletar diretorio"
                            onClick={showModal}
                        >
                            <FaTrashAlt />
                        </button>
                    </div>
                )}
            </li>
        </>
    )
}