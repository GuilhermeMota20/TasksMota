import Image from "next/image";
import UserAvatar from '../../../assets/UserAvatar.svg';
import { auth } from "../../../Firebase";

export default function HeaderConfig() {
    const userData = auth.currentUser;

    return (
        <div className={`w-full h-36 rounded-t-md relative purple:bg-purple-600 bg-pink-600`}>
            <Image src={userData ? userData.photoURL : UserAvatar} alt="Avatar" className="rounded-full w-36 absolute top-16 left-14" width={144} height={144} />
        </div>

    )
}