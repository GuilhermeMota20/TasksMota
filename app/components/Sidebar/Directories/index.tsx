import { useEffect, useState } from "react";
import { AlertType } from "../../../types/Alert";
import ModalDirectories from "../../Modals/ModalDirectories";
import Alert from "../../Utilities/Alert";
import AccordionDirectory from "./AccordionDirectory";
import ItemDirectory from "./ItemDirectory";
import { usePathname } from "next/navigation";

export interface Directry {
  id: string;
  dir: string;
};

interface DirectoriesProps {
  directories: Directry[];
  classActive: string;
};

export default function Directories({ directories, classActive }: DirectoriesProps) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [modalDirIsShown, setModalDirIsShown] = useState(false);
  const [alert, setAlert] = useState<AlertType | null>(null);

  const pathName = usePathname();
  const containsDirectory = pathName.includes('Directory');

  const toggleModalDir = () => setModalDirIsShown((prev) => !prev);

  useEffect(() => {
    if (containsDirectory)
      setActiveIndex(3);
  }, [containsDirectory, pathName]);

  return (
    <>
      {alert && (
        <Alert type={alert.type} message={alert.message} />
      )}

      {modalDirIsShown && (
        <ModalDirectories
          nameForm="Criar novo diretorio"
          onClose={toggleModalDir}
          setAlert={setAlert}
        />
      )}

      <AccordionDirectory
        title="Diretorios"
        index={3}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        {directories.map((directory) => (
          <ItemDirectory key={directory.id} directory={directory} classActive={classActive} />
        ))}

        <button
          className="px-3 py-1 border-slate-300 dark:border-slate-700 border-2 mt-4 rounded-md border-dashed hover:text-pink-500"
          onClick={toggleModalDir}
        >
          + Novo
        </button>
      </AccordionDirectory>
    </>
  )
}