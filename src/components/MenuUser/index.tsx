import { useState } from "react";
import { useScreenMedia } from "../../services/hooks/useScreenMedia";
import AvatarUser from "./AvatarUser";
import ProgressTasks from "./ProgressTasks";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxGear } from "react-icons/rx";

export default function MenuUser() {
    const mediaQueries = useScreenMedia();
    const [showMenuUser, setShowMenuUser] = useState(false);

    const closeMenuUser = () => showMenuUser ? setShowMenuUser(false) : setShowMenuUser(true);
    const openMenuUser = () => !showMenuUser ? setShowMenuUser(true) : setShowMenuUser(false);

    return (
        <>
            <section
                className={`flex flex-col gap-4 bg-slate-100 h-screen w-60 p-4 xl:w-2/12 fixed z-20 top-0 right-0
                ${showMenuUser || mediaQueries.xl ? 'block' : 'hidden'}`}
            >
                <div className="flex gap-4 items-end justify-end w-full py-2">
                    <button className="bg-white p-2 rounded-md transition hover:shadow-md">
                        <RxGear />
                    </button>
                    <button className="bg-white p-2 rounded-md transition hover:shadow-md">
                        <IoMdNotificationsOutline />
                    </button>
                    <AvatarUser />
                </div>
                <ProgressTasks />
            </section>

            {showMenuUser && !mediaQueries.xl && (
                <div
                    className="fixed cursor-pointer bg-slate-600/[.2] w-full h-full z-10 top-0 left-0"
                    onClick={closeMenuUser}
                ></div>
            )}

            {!showMenuUser && !mediaQueries.xl && (
                <div className="ml-6 flex items-center" onClick={openMenuUser}>
                    <AvatarUser className="w-12 h-12" />
                </div>
            )}
        </>
    )
}