import Link from "next/link";
import { BsCheck2Circle, BsFiles } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineRunningWithErrors } from "react-icons/md";

const links = [
    {
        name: 'Tasks do dia',
        path: '/',
        icon: <GrHomeRounded />,
    },
    {
        name: 'Todas as tasks',
        path: '/allTasks',
        icon: <BsFiles />,
    },
    {
        name: 'Tasks concluídas',
        path: '/completedTasks',
        icon: <BsCheck2Circle />,
    },
    {
        name: 'Tasks incompletas',
        path: '/uncompletedTasks',
        icon: <MdOutlineRunningWithErrors />,
    },
];

export default function NavLinks() {
    return (
        <nav className="w-full">
            <ul className="w-full flex flex-col gap-4">
                {links.map(link => (
                    <li key={link.path} className="px-4 py-2 rounded-md cursor-pointer transition hover:bg-slate-200">
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