import Image from "next/image";
import { auth } from "../../services/Firebase";

type AvatarProps = {
  onClick?: () => void;
  className?: string; 
};

export default function Avatar({className, onClick}: AvatarProps) {
  const userData = auth.currentUser;

  return (
    <>
      <Image
        className={`block object-cover rounded-md ${className}`}
        src={userData?.photoURL}
        alt="user.userName"
        width={48}
        height={48}
        quality={100}
        onClick={onClick}
      />
    </>
  )
}