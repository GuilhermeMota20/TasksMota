import Image from "next/image";
import UserAvatar from '../../assets/UserAvatar.svg';

interface AddNewTaskProps {
    className?: string;
}

export default function AvatarUser({ className }: AddNewTaskProps) {
    return (
        <Image src={UserAvatar} width={32} height={32} alt='user' className={`bg-slate-800 rounded-md cursor-pointer transition hover:shadow-lg ${className}`} />
    )
}