import { useState } from "react";
import ModalDirectories from "../../Modals/ModalDirectories";
import AccordionDirectory from "./AccordionDirectory";
import ItemDirectory from "./ItemDirectory";

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

    const closeModalDir = () => modalDirIsShown ? setModalDirIsShown(false) : setModalDirIsShown(true);
    const openModalDir = () => !modalDirIsShown ? setModalDirIsShown(true) : setModalDirIsShown(false);

    return (
        <>
            {modalDirIsShown && (
                <ModalDirectories
                    nameForm="Criar novo diretorio"
                    onClose={closeModalDir}
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
                    onClick={openModalDir}
                >
                    + Novo
                </button>
            </AccordionDirectory>
        </>
    )
}