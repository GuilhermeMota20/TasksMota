"use client"
import { DocumentData } from "firebase/firestore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTrashAlt } from "react-icons/fa";
import { useModalGlobals } from "../../../services/hooks/useModalsGlobal";
import { Tasks } from "../../../types/Task";

interface DirectoryProps {
  directory: DocumentData | Tasks;
  classActive: string;
};

export default function ItemDirectory({ directory, classActive }: DirectoryProps) {
  const pathName = usePathname();
  const currentPath = pathName;
  const formattedPath = currentPath.split("/").pop();

  const { onOpenDeleteDirectory, setCurrentDirectorySelected } = useModalGlobals();

  return (
    <>
      <li className={`flex items-center px-4 py-2 cursor-pointer transition hover:bg-slate-200 dark:hover:text-slate-200 dark:hover:bg-transparent ${formattedPath === directory.dir ? classActive : ''}`}>
        <Link href={`/Directory/${directory.dir}`} className="flex items-center gap-4">
          {directory.dir}
        </Link>

        {directory.dir !== 'master' && (
          <div className="ml-auto flex items-center gap-4 xl:opacity-0 transition opacity-100 hover:xl:opacity-100">
            <button
              title="Deletar diretorio"
              onClick={() => {
                onOpenDeleteDirectory();
                setCurrentDirectorySelected(directory);
              }}
            >
              <FaTrashAlt />
            </button>
          </div>
        )}
      </li>
    </>
  )
}