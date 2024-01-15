import Image from "next/image";
import { auth } from "../../services/Firebase";
import RandomAvatar from "../../services/hooks/randomAvatar";
import { useScreenMedia } from "../../services/hooks/useScreenMedia";

interface AddNewTaskProps {
  className?: string;
};

export default function AvatarUser({ className }: AddNewTaskProps) {
  const userData = auth.currentUser;
  const mediaScreen = useScreenMedia();
  const randomImage = RandomAvatar();

  return (
    <>
      <div className={`flex items-center justify-center bg-slate-100 dark:bg-darkBlue-800 rounded-md ${!mediaScreen.xl ? 'cursor-pointer' : ''} transition hover:shadow-lg ${className}`}>
        <Image
          src={userData?.photoURL ?? randomImage}
          width={32}
          height={32}
          alt={userData?.displayName ? userData?.displayName : 'user'}
        />
      </div>
    </>
  )
}