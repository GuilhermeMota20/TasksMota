interface AddNewTaskProps {
    className?: string;
}

export default function AddNewTask({ className }: AddNewTaskProps) {
    return (
        <button className={`px-4 py-3 bg-pink-600 text-white transition rounded-md hover:bg-pink-700 ${className}`}>Add nova tarefa</button>
    )
}