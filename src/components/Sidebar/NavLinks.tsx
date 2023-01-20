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
    const currentPath = route.asPath;

    const links = [
        {
            name: 'Tarefas do dia',
            path: '/',
            icon: <GoHome className={`${currentPath === '/' ? 'fill-rose-600' : ''}`} />,
        },
        {
            name: 'Todas as tarefas',
            path: '/allTasks',
            icon: <BsFiles className={`${currentPath === '/allTasks' ? 'fill-rose-600' : ''}`} />,
        },
        {
            name: 'Tarefas concluídas',
            path: '/completedTasks',
            icon: <BsCheck2Circle className={`${currentPath === '/completedTasks' ? 'fill-rose-600' : ''}`} />,
        },
        {
            name: 'Tarefas incompletas',
            path: '/uncompletedTasks',
            icon: <MdOutlineRunningWithErrors className={`${currentPath === '/uncompletedTasks' ? 'fill-rose-600' : ''}`} />,
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