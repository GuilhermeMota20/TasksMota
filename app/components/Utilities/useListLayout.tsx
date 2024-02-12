import { useLayoutSystem } from "../../services/hooks/useLayoutSystem";
import { ListLayoutType } from "../../types/ListLayout";
import LayoutExpandidoIcon from "./LayoutExpandido";
import LayoutHorizontalIcon from "./LayoutHorizontal";
import LayoutVerticalIcon from "./LayoutVertical";

export const useListLayout = (): ListLayoutType[] => {
  const {
    onRevertNavHorizontal,
    onSetIsNavHorizontal,
    toggleLayoutExpanded
  } = useLayoutSystem((state) => state);

  return [
    {
      title: "Layout horizontal",
      element: <LayoutHorizontalIcon />,
      description: "Altere o layout para exibicao do menu de navegacao na horizontal.",
      action: onSetIsNavHorizontal
    },
    {
      title: "Layout vertical",
      element: <LayoutVerticalIcon />,
      description: "Altere o layout para exibicao do menu de navegacao na vertical.",
      action: onRevertNavHorizontal
    },
    {
      title: "Expandir layout",
      element: <LayoutExpandidoIcon />,
      description: "Altere o layout para uma exibicao mais ampla.",
      action: toggleLayoutExpanded
    },
  ];
};
