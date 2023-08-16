import Image from "next/image";
import { auth } from "../../../services/Firebase";
import CapitalizeFirstLetters from "../../../services/hooks/capitalizeFirstLetters";

export default function HeaderConfig() {
  const userData = auth.currentUser;

  return (
    <div className={`w-full h-36 rounded-t-md relative purple:bg-purple-600 bg-pink-600`}>
      {userData?.photoURL && (
        <Image
          src={userData.photoURL}
          alt="Avatar"
          className="rounded-full w-36 absolute top-16 left-14"
          width={144}
          height={144}
        />
      )}

      {!userData?.photoURL && (
        <div className="rounded-full w-36 absolute top-16 left-14">
          {CapitalizeFirstLetters(userData?.displayName)}
        </div>
      )}
    </div>
  )
}