import Image from "next/image";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxGear } from "react-icons/rx";
import avatarImage from '../../assets/Mota.png';

export default function AvatarUser() {
    return (
        <div className="flex gap-4 items-end justify-end w-full px-4 py-2">
            <button className="bg-white p-2 rounded-md transition hover:shadow-md">
                <RxGear />
            </button>
            <button className="bg-white p-2 rounded-md transition hover:shadow-md">
                <IoMdNotificationsOutline />
            </button>

            <Image src={avatarImage} width={32} height={32} alt='user' className="bg-slate-800 rounded-md" />
        </div>
    )
}