import Image from "next/image";
import { auth } from "../../services/Firebase";
import CapitalizeFirstLetters from "../../services/hooks/capitalizeFirstLetters";
import { useScreenMedia } from "../../services/hooks/useScreenMedia";

interface AddNewTaskProps {
  className?: string;
};

export default function AvatarUser({ className }: AddNewTaskProps) {
  const userData = auth.currentUser;
  const mediaScreen = useScreenMedia();

  return (
    <>
      {/* {userData?.photoURL ? (
        <Image
          src={userData?.photoURL}
          width={32}
          height={32}
          alt={userData?.displayName ? userData?.displayName : 'user'}
          className={`bg-slate-800 rounded-md ${!mediaScreen.xl ? 'cursor-pointer' : ''} transition hover:shadow-lg ${className}`}
        />
      ) : (
        <div className={`w-8 h-8 rounded-md bg-slate-800 ${!mediaScreen.xl ? 'cursor-pointer' : ''} transition hover:shadow-lg ${className}`}>
          {CapitalizeFirstLetters(userData?.displayName)}
        </div>
      )} */}
    </>
  )
}