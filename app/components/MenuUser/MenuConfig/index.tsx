import { useState } from "react";
import { RxGear } from "react-icons/rx";
import { cn } from "../../../lib/utils";
import { useModalGlobals } from "../../../services/hooks/useModalsGlobal";
import { useScreenMedia } from "../../../services/hooks/useScreenMedia";
import ButtonTheme from "../../Utilities/ButtonTheme";
import ConfigLayout from "./ConfigLayout";
import ConfigUser from "./ConfigUser";
import HeaderConfig from "./HeaderConfig";

export default function MenuUserConfig() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [showMenuConfig, setShowMenuConfig] = useState(false);

  const mediaQueries = useScreenMedia();
  const { onOpenLogout, onOpenDeleteTasks, onOpenDeleteUser, onOpenConfigUser } = useModalGlobals();

  const toggleMenuConfig = () => setShowMenuConfig((prev) => !prev);

  return (
    <>
      <button
        className="bg-white w-12 h-12 p-2 rounded-md flex items-center justify-center transition hover:shadow-md dark:bg-darkBlue-700"
        onClick={toggleMenuConfig}
      >
        <RxGear width={12} height={12} />
      </button>

      <ButtonTheme className="bg-white" />

      <section className={cn(
        "fixed top-0 right-0 h-full w-72 p-4 z-20 ease-in-out transition-transform duration-300",
        showMenuConfig ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      )} >
        <div className="bg-slate-100 dark:bg-darkBlue-800 rounded-md flex flex-col gap-2 h-full w-full">
          <HeaderConfig
            showModalUser={onOpenConfigUser}
          />

          <div className="flex flex-col gap-8 mt-4">
            <ConfigUser
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              showModalLogout={onOpenLogout}
              showModalDeleteAllTasks={onOpenDeleteTasks}
              showModalDeleteCurrentUser={onOpenDeleteUser}
            />

            {mediaQueries.md || mediaQueries.lg || mediaQueries.xl && (
              <ConfigLayout
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
              />
            )}
          </div>
        </div>
      </section>

      {showMenuConfig && (
        <div
          className="fixed bg-slate-600/[.2] w-full h-full z-10 top-0 left-0 backdrop-blur-sm"
          onClick={toggleMenuConfig}
        ></div>
      )}
    </>
  )
}