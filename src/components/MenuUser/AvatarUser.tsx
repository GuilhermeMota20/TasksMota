import Image from "next/image";
import avatarImage from '../../assets/Mota.png';

interface AddNewTaskProps {
    className?: string;
}

export default function AvatarUser({ className }: AddNewTaskProps) {
    return (
        <Image src={avatarImage} width={32} height={32} alt='user' className={`bg-slate-800 rounded-md cursor-pointer transition hover:shadow-lg ${className}`} />
    )
}