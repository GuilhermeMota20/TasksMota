'use client'
import { useState } from "react";
import { useScreenMedia } from "../../services/hooks/useScreenMedia";
import Avatar from "../Utilities/Avatar";
import MenuUserConfig from "./MenuConfig";
import TasksDone from "./TasksDone";

export default function MenuUser() {
  const mediaQueries = useScreenMedia();
  const [showMenuUser, setShowMenuUser] = useState(false);

  const toggleMenuUser = () => setShowMenuUser((prev) => !prev);

  return (
    <>
      <section
        className={`flex flex-col gap-4 bg-slate-100 dark:bg-darkBlue-800 h-screen w-60 p-4 xl:w-2/12 fixed z-20 top-0 right-0 ${showMenuUser || mediaQueries.xl ? 'block' : 'hidden'}`}
      >
        <div className="flex gap-4 items-end justify-end w-full py-2">
          <MenuUserConfig />
          <Avatar />
        </div>

        <TasksDone />
      </section>

      {showMenuUser && !mediaQueries.xl && (
        <div
          className="fixed bg-slate-600/[.2] w-screen h-full z-10 top-0 left-0"
          onClick={toggleMenuUser}
        ></div>
      )}

      {!mediaQueries.xl && (
        <div className="ml-6 flex items-center cursor-pointer" onClick={toggleMenuUser}>
          <Avatar />
        </div>
      )}
    </>
  )
}