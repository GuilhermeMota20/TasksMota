import Image from "next/image";
import UserAvatar from '../../assets/UserAvatar.svg';
import { auth } from "../../Firebase";
import { useScreenMedia } from "../../services/hooks/useScreenMedia";

interface AddNewTaskProps {
    className?: string;
}

export default function AvatarUser({ className }: AddNewTaskProps) {
    const userData = auth.currentUser;
    const mediaScreen = useScreenMedia();

    return (
        <Image src={userData.photoURL ? userData.photoURL : UserAvatar} width={32} height={32} alt='user' className={`bg-slate-800 rounded-md ${!mediaScreen.xl ? 'cursor-pointer' : ''} transition hover:shadow-lg ${className}`} />
    )
}