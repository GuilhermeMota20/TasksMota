import ConfigAccordion from "./ConfigAccordion";
import { BsLayoutTextWindowReverse } from "react-icons/bs";
import LayoutHorizontalIcon from "../../Utilities/LayoutHorizontal";
import LayoutVerticalIcon from "../../Utilities/LayoutVertical";
import { useLayoutSystem } from "../../../services/hooks/useLayoutSystem";
import LayoutExpandidoIcon from "../../Utilities/LayoutExpandido";

interface ConfigLayoutProps {
  activeIndex: number;
  setActiveIndex: any;
  showModalLogout?: () => void;
  showModalDeleteAllTasks?: () => void;
  showModalDeleteCurrentUser?: () => void;
};

export default function ConfigLayout({ activeIndex, setActiveIndex }: ConfigLayoutProps) {
  const {
    onRevertNavHorizontal,
    onSetIsNavHorizontal,
    toggleLayoutExpanded
  } = useLayoutSystem((state) => state);

  return (
    <>
      <ConfigAccordion
        title="Configurações de layout"
        icon={<BsLayoutTextWindowReverse size={16} />}
        index={5}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      >
        <div className="grid grid-cols-2 place-items-center gap-4">
          <button onClick={onSetIsNavHorizontal}>
            <LayoutHorizontalIcon />
          </button>

          <button onClick={onRevertNavHorizontal}>
            <LayoutVerticalIcon />
          </button>

          <button onClick={toggleLayoutExpanded}>
            <LayoutExpandidoIcon />
          </button>
        </div>
      </ConfigAccordion>
    </>
  )
}