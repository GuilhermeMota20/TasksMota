'use client'
import { useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useScreenMedia } from "../../services/hooks/useScreenMedia";
import AvatarUser from "./AvatarUser";
import MenuUserConfig from "./MenuConfig";
import ProgressTasks from "./ProgressTasks";

export default function MenuUser() {
    const mediaQueries = useScreenMedia();
    const [showMenuUser, setShowMenuUser] = useState(false);

    const closeMenuUser = () => showMenuUser ? setShowMenuUser(false) : setShowMenuUser(true);
    const openMenuUser = () => !showMenuUser ? setShowMenuUser(true) : setShowMenuUser(false);

    return (
        <>
            <section
                className={`flex flex-col gap-4 bg-slate-100 dark:bg-darkBlue-800 h-screen w-60 p-4 xl:w-2/12 fixed z-20 top-0 right-0 ${showMenuUser || mediaQueries.xl ? 'block' : 'hidden'}`}
            >
                <div className="flex gap-4 items-end justify-end w-full py-2">
                    <MenuUserConfig />
                    <button className="bg-white p-2 rounded-md transition hover:shadow-md dark:bg-darkBlue-700">
                        <IoMdNotificationsOutline />
                    </button>
                    <AvatarUser className="cursor-default" />
                </div>
                <ProgressTasks />
            </section>

            {showMenuUser && !mediaQueries.xl && (
                <div
                    className="fixed bg-slate-600/[.2] w-full h-full z-10 top-0 left-0"
                    onClick={closeMenuUser}
                ></div>
            )}

            {!mediaQueries.xl && (
                <div className="ml-6 flex items-center" onClick={openMenuUser}>
                    <AvatarUser className="w-12 h-12" />
                </div>
            )}
        </>
    )
}