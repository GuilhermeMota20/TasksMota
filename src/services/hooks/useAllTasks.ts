import { useQuery } from "react-query";
import { Tasks } from "../../types/Task";
import { api } from "../api";

export type GetTasksResponse = {
    tasks: Tasks[];
};

type UseTasksOptions = {
    initialData: {
        tasks: Tasks[];
    };
};

export async function getAllTasks(): Promise<GetTasksResponse> {
    const { data } = await api.get<{ tasks: Tasks[] }>('AllTasks');

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
    };
};

export function useAllTasks(options?: UseTasksOptions) {
    return useQuery(['AllTasks'], () => getAllTasks(), {
        staleTime: 1000 * 60 * 10,
        ...options,
    });
}