import { auth } from "../../../services/Firebase";
import Avatar from "../../Utilities/Avatar";

type HeaderConfigProps = {
  showModalUser: () => void;
};

export default function HeaderConfig({ showModalUser }: HeaderConfigProps) {
  const userData = auth.currentUser;

  return (
    <>
      <div className={`w-full h-36 rounded-t-md relative purple:bg-purple-600 bg-pink-600`}>
        <div className="absolute top-[70px] left-0 w-full h-16 px-2">
          <div
            className="flex items-center self-center gap-2 px-2 w-full h-full rounded-md bg-slate-200 dark:bg-darkBlue-700 hover:cursor-pointer hover:shadow-md"
            onClick={showModalUser}
          >
            <Avatar />

            <div>
              <strong className="line-clamp-1 text-sm ">{!userData?.displayName ? 'Anonymous' : userData?.displayName}</strong>
              <p className="line-clamp-1 text-sm">{userData?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}