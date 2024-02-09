import Image from "next/image";
import { auth } from "../../services/Firebase";

export default function Avatar() {
  const userData = auth.currentUser;

  return (
    <>
      <Image
        className="block object-cover rounded-md"
        src={userData?.photoURL}
        alt="user.userName"
        width={48}
        height={48}
        quality={100}
      />
    </>
  )
}