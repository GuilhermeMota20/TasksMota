import Link from "next/link";
import { LiaSignInAltSolid } from "react-icons/lia";
import { useAuth } from "../../context/AuthContext";
import { cn } from "../../lib/utils";
import { useScrollTop } from "../../services/hooks/useScrollTop";
import Avatar from "../Utilities/Avatar";
import ButtonTheme from "../Utilities/ButtonTheme";

export default function HeaderMarketing() {
  const { user } = useAuth();
  const scrolled = useScrollTop();

  return (
    <>
      <header className={cn(
        'flex items-center gap-2 justify-between p-4 fixed w-full top-0 left-0 z-50 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24',
        scrolled && "shadow-md backdrop-blur-md bg-slate-50/90 dark:bg-darkBlue-700/90",
      )}>
        <h1 className="font-bold text-lg text-center">ToDoTask <span className="text-pink-600">.</span></h1>

        <div className="flex items-center gap-2">
          {user ? (
            <Link href="/AllTasks" className="hidden md:block">
              <button className="px-4 py-3 bg-pink-600 text-white transition rounded-md hover:bg-pink-700 dark:shadow-transparent flex items-center justify-center">
                <LiaSignInAltSolid className="mr-2 w-6 h-6" />
                Entrar
              </button>
            </Link>
          ) : (
            <Link href="/Signin" className="hidden md:block">
              <button className="px-4 py-3 bg-pink-600 text-white transition rounded-md hover:bg-pink-700 dark:shadow-transparent">
                Comece agora sem pagar nada!
              </button>
            </Link>
          )}

          <ButtonTheme className='h-full' />

          {user && (
            <Avatar />
          )}
        </div>
      </header>
    </>
  )
}