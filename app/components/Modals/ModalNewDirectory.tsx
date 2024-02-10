import { useModalGlobals } from "../../services/hooks/useModalsGlobal";
import ModalDirectories from "./ModalDirectories";

export default function ModalNewDirectory() {
  const { isOpenNewDirectory, onCloseNewDirectory } = useModalGlobals();

  return (
    <>
      {isOpenNewDirectory && (
        <ModalDirectories
          nameForm="Criar novo diretorio"
          onClose={onCloseNewDirectory}
        />
      )}
    </>
  )
}