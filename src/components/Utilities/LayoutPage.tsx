import { DocumentData, FirestoreError, QuerySnapshot } from "firebase/firestore";
import { Tasks } from "../../types/Task";
import Header from "../Header";
import TasksSection from "../TasksSection";

interface LayoutPageProps {
    isLoading: boolean;
    error: FirestoreError;
    tasks: Tasks[] | DocumentData;
};

export default function LayoutPage({ isLoading, error, tasks }: LayoutPageProps) {
    return (
        <section className="text-slate-600 dark:bg-darkBlue-900 dark:text-slate-400 pt-5 pb-8 sm:pb-16 px-4 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen flex flex-col gap-6">
            <Header />
            <TasksSection tasks={tasks} error={error} isLoading={isLoading} />
        </section>
    )
}