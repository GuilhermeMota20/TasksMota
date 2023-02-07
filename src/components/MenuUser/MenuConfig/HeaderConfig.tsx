import Image from "next/image";
import avatarImage from '../../../assets/Mota.png';

export default function HeaderConfig() {
    return (
        <div className={`w-full h-36 rounded-t-md relative purple:bg-purple-600 bg-pink-600`}>
            <Image src={avatarImage} alt="Avatar" className="rounded-full w-36 absolute top-16 left-14" />
        </div>
    )
}