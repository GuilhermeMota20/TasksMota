import { DocumentData, FirestoreError } from "firebase/firestore";
import { Tasks } from "../../types/Task";
import LayoutTasks from "../Utilities/LayoutTasks";

interface TasksSectionProps {
    allTasks: Tasks[] | DocumentData;
    isLoading: boolean;
    error: FirestoreError;
}

export default function TasksSection({ allTasks, error, isLoading }: TasksSectionProps) {
    return (
        <LayoutTasks
            title=""
            tasks={allTasks}
            isLoading={isLoading}
            error={error}
        />
    )
};