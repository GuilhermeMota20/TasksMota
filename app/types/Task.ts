import { DocumentData, FirestoreError } from "firebase/firestore";

export interface Tasks {
  id: string;
  userUid?: string;
  title: string;
  description: string;
  date: string;
  completed: boolean;
  important: boolean;
  dir: string;
};

export interface LayoutTaskSectionProps {
  title: string;
  tasks: Tasks[] | DocumentData;
  isLoading: boolean;
  error: FirestoreError;
};