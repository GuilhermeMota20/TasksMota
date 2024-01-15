import Image from "next/image";
import { auth } from "../../../services/Firebase";
import RandomAvatar from "../../../services/hooks/randomAvatar";

export default function HeaderConfig() {
  const userData = auth.currentUser;
  const randomImage = RandomAvatar();

  return (
    <div className={`w-full h-36 rounded-t-md relative purple:bg-purple-600 bg-pink-600`}>
      <div className="absolute top-16 left-14 rounded-full w-36">
        <Image
          src={userData?.photoURL ?? randomImage}
          alt="Avatar"
          width={144}
          height={144}
        />
      </div>
    </div>
  )
}