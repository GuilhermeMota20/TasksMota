import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineFire } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { MdLabelImportantOutline, MdOutlineRunningWithErrors } from "react-icons/md";
import { useDirectorys } from "../../services/hooks/useDirectorys";
import Directories from "./Directories";

interface NavLinksProps {
  classActive?: string;
};

export default function NavLinks({ classActive }: NavLinksProps) {
  const { directorys } = useDirectorys();

  const pathName = usePathname();
  const currentPath = pathName;

  const links = [
    {
      name: 'Todas as tarefas',
      path: '/AllTasks',
      icon: <GoHome className={`${currentPath === '/AllTasks' ? 'fill-rose-600' : ''}`} />,
    },
    {
      name: 'Tarefas do dia',
      path: '/TasksOfTheDay',
      icon: <AiOutlineFire className={`${currentPath === '/TasksOfTheDay' ? 'fill-rose-600' : ''}`} />,
    },
    {
      name: 'Tarefas importantes',
      path: '/ImportantTasks',
      icon: <MdLabelImportantOutline className={`${currentPath === '/ImportantTasks' ? 'fill-rose-600' : ''}`} />,
    },
    {
      name: 'Tarefas concluídas',
      path: '/CompletedTasks',
      icon: <BsCheck2Circle className={`${currentPath === '/CompletedTasks' ? 'fill-rose-600' : ''}`} />,
    },
    {
      name: 'Tarefas incompletas',
      path: '/UncompletedTasks',
      icon: <MdOutlineRunningWithErrors className={`${currentPath === '/UncompletedTasks' ? 'fill-rose-600' : ''}`} />,
    },
  ];

  return (
    <nav className="w-full">
      <ul className="w-full flex flex-col gap-4">
        {links.map(link => (
          <li
            key={link.path}
            className={`px-4 py-2 cursor-pointer transition hover:bg-slate-200 dark:hover:text-slate-200 dark:hover:bg-transparent ${currentPath === link.path ? classActive : ''}`}
          >
            <Link href={link.path} className="flex items-center gap-4">
              {link.icon}
              {link.name}
            </Link>
          </li>
        ))}

        <Directories
          directories={directorys}
          classActive={classActive}
        />
      </ul>
    </nav>
  )
}