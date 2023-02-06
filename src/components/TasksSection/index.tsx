import { DocumentData, FirestoreError } from "firebase/firestore";
import { Tasks } from "../../types/Task";
import LayoutTasks from "../Utilities/LayoutTasks";

interface TasksSectionProps {
    tasks: Tasks[] | DocumentData;
    isLoading: boolean;
    error: FirestoreError;
}

export default function TasksSection({ tasks, error, isLoading }: TasksSectionProps) {
    return (
        <LayoutTasks
            title=""
            tasks={tasks}
            isLoading={isLoading}
            error={error}
        />
    )
};