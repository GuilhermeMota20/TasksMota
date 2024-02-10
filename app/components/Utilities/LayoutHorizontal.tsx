import { cn } from "../../lib/utils";
import { useLayoutSystem } from "../../services/hooks/useLayoutSystem";

export default function LayoutHorizontalIcon() {
  const { isNavHorizontal } = useLayoutSystem((state) => state);

  return (
    <div className="group h-16 w-16 p-2 flex items-start justify-start bg-slate-200 dark:bg-darkBlue-900 rounded-md">
      <div className={cn(
        "h-6 w-full bg-slate-300 dark:bg-darkBlue-700 rounded-md group-hover:bg-pink-600 transition",
        isNavHorizontal ? "bg-pink-600 dark:bg-pink-600" : ""
      )} />
    </div>
  )
};