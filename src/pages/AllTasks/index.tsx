import { useState } from "react";
import Header from "../../components/Header";
import { useAllTasks } from "../../services/hooks/useAllTasks";

export default function AllTasks() {
    const [page, setPage] = useState(1);
    const { data, isLoading, isFetched, error, refetch } = useAllTasks(page);

    return (
        <section className="text-slate-600 pt-5 pb-8 sm:pb-16 px-4 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen flex flex-col gap-6">
            <Header />

            {data?.tasks.map(task => (
                <h1 key={task.id} >{task.title}</h1>
            ))}
        </section>
    );
};