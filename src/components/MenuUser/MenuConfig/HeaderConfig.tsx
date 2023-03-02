import Image from "next/image";
import { AiOutlineLogout } from "react-icons/ai";
import UserAvatar from '../../../assets/UserAvatar.svg';
import { useAuth } from "../../../context/AuthContext";

export default function HeaderConfig() {
    const { user, Logout } = useAuth();

    return (
        <div className={`w-full h-36 rounded-t-md relative purple:bg-purple-600 bg-pink-600`}>
            {user ? (
                <button
                    className="absolute right-4 top-4 transition hover:bg-slate-300 rounded-md hover:bg-opacity-20 text-slate-100 hover:text-slate-50 p-1"
                    title="Logout (Sair)"
                    onClick={Logout}
                >
                    <AiOutlineLogout size={24} />
                </button>
            ) : (
                null
            )}
            <Image src={UserAvatar} alt="Avatar" className="rounded-full w-36 absolute top-16 left-14" />
        </div>

    )
}