import { addDoc, collection, DocumentData } from "firebase/firestore";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { auth, db } from "../../../services/Firebase";
import { useDirectorys } from "../../../services/hooks/useDirectorys";
import { useModalGlobals } from "../../../services/hooks/useModalsGlobal";
import { Tasks } from "../../../types/Task";
import AccordionDirectory from "./AccordionDirectory";
import ItemDirectory from "./ItemDirectory";

interface DirectoriesProps {
  directories: (Tasks | DocumentData)[];
  classActive: string;
};

export default function Directories({ directories, classActive }: DirectoriesProps) {
  const { directorys, isLoading } = useDirectorys();
  const { onOpenNewDirectory } = useModalGlobals();

  const [activeIndex, setActiveIndex] = useState(1);

  const userData = auth.currentUser;
  const pathName = usePathname();
  const containsDirectory = pathName.includes('Directory');

  useEffect(() => {
    if (containsDirectory)
      setActiveIndex(3);
  }, [containsDirectory, pathName]);

  useEffect(() => {
    if (!isLoading && !directorys.length) {
      const ref = collection(db, 'directories');

      addDoc(ref, {
        userUid: userData.uid,
        dir: "master",
      });
    };
  }, [isLoading, directorys.length, userData.uid]);

  return (
    <>
      <AccordionDirectory
        title="Diretorios"
        index={3}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        {directories.map((dir) => (
          <ItemDirectory key={dir.id} directory={dir} classActive={classActive} />
        ))}

        <button
          className="px-3 py-1 border-slate-300 dark:border-slate-700 border-2 mt-4 rounded-md border-dashed hover:text-pink-500"
          onClick={onOpenNewDirectory}
        >
          + Novo
        </button>
      </AccordionDirectory>
    </>
  )
}