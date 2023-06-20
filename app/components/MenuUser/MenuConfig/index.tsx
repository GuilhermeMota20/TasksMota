import { useState } from "react";
import { RxGear } from "react-icons/rx";
import { useAuth } from "../../../context/AuthContext";
import { auth } from "../../../services/Firebase";
import ModalConfirm from "../../Modals/ModalConfirm";
import Divider from "../../Utilities/Divider";
import ConfigUser from "./ConfigUser";
import DarkMode from "./DarkMode";
import HeaderConfig from "./HeaderConfig";

export default function MenuUserConfig() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [showMenuConfig, setShowMenuConfig] = useState(false);
    const { Logout } = useAuth();

    const closeMenuConfig = () => showMenuConfig ? setShowMenuConfig(false) : setShowMenuConfig(true);
    const openMenuConfig = () => !showMenuConfig ? setShowMenuConfig(true) : setShowMenuConfig(false);
    const [showModal, setIsModalShown] = useState(false);

    const handleLogout = () => {
        Logout();
    };

    const userData = auth.currentUser;

    return (
        <>
            <button
                className="bg-white p-2 rounded-md transition hover:shadow-md dark:bg-darkBlue-700"
                onClick={openMenuConfig}
            >
                <RxGear />
            </button>

            <section
                className={`fixed top-0 right-0 h-full w-72 p-4 z-20 ease-in-out opacity-0 transition-transform duration-300 
                ${showMenuConfig ? 'translate-x-0 opacity-100' : 'translate-x-full'}`}
            >
                <div className="bg-slate-100 dark:bg-darkBlue-800 rounded-md flex flex-col gap-2 h-full w-full">
                    <HeaderConfig />

                    <div className="px-4 mt-[5rem] text-center">
                        <strong>{!userData.displayName ? 'Anonymous' : userData.displayName}</strong>
                        <p>{userData.email}</p>
                    </div>

                    <div className="mt-4">
                        <Divider />
                    </div>

                    <div className="flex flex-col gap-8 mt-4">
                        {/* <ChangeColorPrimary
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                        /> */}

                        <ConfigUser
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                            showModalLogout={() => setIsModalShown(true)}
                        />

                        <DarkMode
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                        />

                    </div>
                </div>
            </section>

            {showModal && (
                <ModalConfirm
                    onClose={() => setIsModalShown(false)}
                    text="Você será desconectado da sua conta atual."
                    onConfirm={handleLogout}
                />
            )}

            {showMenuConfig && (
                <div
                    className="fixed bg-slate-600/[.2] w-full h-full z-10 top-0 left-0"
                    onClick={closeMenuConfig}
                ></div>
            )}
        </>
    )
}