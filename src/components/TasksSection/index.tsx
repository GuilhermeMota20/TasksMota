import { useState } from "react";
import { useAllTasks } from "../../services/hooks/useAllTasks";
import LayoutTasks from "../Utilities/LayoutTasks";

export default function TasksSection() {
    const [page, setPage] = useState(1);
    const { data, isLoading, isFetched, error, refetch } = useAllTasks();

    return (
        <>
            <LayoutTasks
                title={`Tarefas do dia (${data?.tasks.length} exibidos)`}
                tasks={data?.tasks}
                isLoading={isLoading}
                error={error}
            />
        </>
    )
}