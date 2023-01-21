import LayoutTasks from "../Utilities/LayoutTasks";

const tasksMock = [
    {
        id: '1',
        title: 'Tarefa 1',
        description: 'Tarefa 1 Tarefa 1 Tarefa 1',
        date: '20/01/2023',
        completed: false,
        important: true,
        dir: '',
    },
    {
        id: '2',
        title: 'Tarefa 2',
        description: 'Tarefa 2 Tarefa 2 Tarefa 2',
        date: '19/01/2023',
        completed: true,
        important: true,
        dir: '',
    },
    {
        id: '3',
        title: 'Tarefa 3',
        description: 'Tarefa 3 Tarefa 3 Tarefa 3',
        date: '18/01/2023',
        completed: false,
        important: false,
        dir: '',
    },
]

export default function TasksSection() {
    return (
        <LayoutTasks title={`Tarefas do dia (${tasksMock.length})`} tasks={tasksMock} />
    )
}