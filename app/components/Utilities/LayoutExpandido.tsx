import { cn } from "../../lib/utils";
import { useLayoutSystem } from "../../services/hooks/useLayoutSystem";

export default function LayoutExpandidoIcon() {
  const { isLayoutExpanded } = useLayoutSystem((state) => state);

  return (
    <>
      <div className="group h-16 w-16 p-2 flex items-center justify-center bg-slate-200 dark:bg-darkBlue-900 rounded-md">
        <span className={cn(
          "text-slate-300 dark:text-darkBlue-700 text-lg group-hover:text-pink-600 mb-[4px]",
          isLayoutExpanded ? "text-pink-600 dark:text-pink-600" : ""
        )}>
          {"<"}
        </span>

        <span className={cn(
          "h-[2px] w-full bg-slate-300 dark:bg-darkBlue-700 group-hover:bg-pink-600",
          isLayoutExpanded ? "bg-pink-600 dark:bg-pink-600" : ""
        )} />

        <span className={cn(
          "text-slate-300 dark:text-darkBlue-700 text-lg group-hover:text-pink-600 mb-[4px]",
          isLayoutExpanded ? "text-pink-600 dark:text-pink-600" : ""
        )}>
          {">"}
        </span>
      </div>
    </>
  )
}