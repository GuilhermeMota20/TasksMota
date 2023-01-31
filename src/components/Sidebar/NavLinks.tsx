import Link from "next/link";
import { useRouter } from "next/router";
import { BsCheck2Circle, BsFiles } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { MdOutlineRunningWithErrors } from "react-icons/md";

interface NavLinksProps {
    classActive?: string;
};

export default function NavLinks({ classActive }: NavLinksProps) {
    const route = useRouter();
    const currentPath = route.pathname;

    const links = [
        {
            name: 'Tarefas do dia',
            path: '/TasksOfTheDay',
            icon: <GoHome className={`${currentPath === '/TasksOfTheDay' ? 'fill-rose-600' : ''}`} />,
        },
        {
            name: 'Todas as tarefas',
            path: '/AllTasks',
            icon: <BsFiles className={`${currentPath === '/AllTasks' ? 'fill-rose-600' : ''}`} />,
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
                        className={`px-4 py-2 cursor-pointer transition hover:bg-slate-200 
                        ${currentPath === link.path ? classActive : ''}`}
                    >
                        <Link href={link.path} className="flex items-center gap-4">
                            {link.icon}
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}