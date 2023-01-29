import { useQuery } from "react-query";
import { Tasks } from "../../types/Task";
import { api } from "../api";

export type GetTasksResponse = {
    totalCount: number;
    tasks: Tasks[];
};

type UseTasksOptions = {
    initialData: {
        tasks: Tasks[];
        totalCount: number;
    };
};

export async function getAllTasks(page: number): Promise<GetTasksResponse> {
    const { data, headers } = await api.get<{ tasks: Tasks[] }>('AllTasks', {
        params: { page },
    });

    const totalCount = Number(headers['x-total-count']);

    const tasks = data.tasks.map(task => ({
        id: task.id,
        title: task.title,
        date: new Date(task.date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }),
        description: task.description,
        important: task.important,
        completed: task.completed,
        dir: task.dir,
    }));

    return {
        tasks,
        totalCount,
    };
}

export function useAllTasks(page: number, options?: UseTasksOptions) {
    return useQuery(['tasks', { page }], () => getAllTasks(page), {
        staleTime: 1000 * 60 * 10,
        ...options,
    });
}