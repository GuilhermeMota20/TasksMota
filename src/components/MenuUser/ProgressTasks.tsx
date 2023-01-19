export default function ProgressTasks() {
    return (
        <>
            <div className="mt-6">
                <span className="flex justify-between mb-2">
                    <span>All tasks</span> 3/3
                </span>
                <div className="bg-slate-200 w-full h-2 rounded-full overflow-hidden">
                    <div className="bg-pink-600 h-full"></div>
                </div>
            </div>

            <span className="mt-6 block pt-4 border-t-slate-300 dark:border-t-slate-700/[.3] border-t-2">
                No tasks today
            </span>
        </>
    )
}