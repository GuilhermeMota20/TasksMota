import Image from "next/image";
import UserAvatar from '../../assets/UserAvatar.svg';
import { auth } from "../../Firebase";

interface AddNewTaskProps {
    className?: string;
}

export default function AvatarUser({ className }: AddNewTaskProps) {
    const userData = auth.currentUser;

    return (
        <Image src={userData.photoURL ? userData.photoURL : UserAvatar} width={32} height={32} alt='user' className={`bg-slate-800 rounded-md cursor-pointer transition hover:shadow-lg ${className}`} />
    )
}