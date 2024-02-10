import { DocumentData } from "firebase/firestore";
import { create } from "zustand";
import { Tasks } from "../../types/Task";

type ModalGlobalsType = {
  isOpenLogout: boolean;
  onOpenLogout: () => void;
  onCloseLogout: () => void;

  isOpenDeleteTasks: boolean;
  onOpenDeleteTasks: () => void;
  onCloseDeleteTasks: () => void;

  isOpenDeleteUser: boolean;
  onOpenDeleteUser: () => void;
  onCloseDeleteUser: () => void;

  isOpenConfigUser: boolean;
  onOpenConfigUser: () => void;
  onCloseConfigUser: () => void;

  isOpenNewDirectory: boolean;
  onOpenNewDirectory: () => void;
  onCloseNewDirectory: () => void;

  isOpenDeleteTask: boolean;
  onOpenDeleteTask: () => void;
  onCloseDeleteTask: () => void;

  currentTaskSelected: Tasks | undefined;
  setCurrentTaskSelected: (task: Tasks | undefined) => void;
  isOpenNewTask: boolean;
  onOpenNewTask: () => void;
  onCloseNewTask: () => void;

  currentDirectorySelected: (Tasks | DocumentData | undefined);
  setCurrentDirectorySelected: (directory: (Tasks | DocumentData | undefined)) => void;
  isOpenDeleteDirectory: boolean;
  onOpenDeleteDirectory: () => void;
  onCloseDeleteDirectory: () => void;
};

export const useModalGlobals = create<ModalGlobalsType>((set, get) => ({
  isOpenLogout: false,
  onOpenLogout: () => set({ isOpenLogout: true }),
  onCloseLogout: () => set({ isOpenLogout: false }),

  isOpenDeleteTasks: false,
  onOpenDeleteTasks: () => set({ isOpenDeleteTasks: true }),
  onCloseDeleteTasks: () => set({ isOpenDeleteTasks: false }),

  isOpenDeleteUser: false,
  onOpenDeleteUser: () => set({ isOpenDeleteUser: true }),
  onCloseDeleteUser: () => set({ isOpenDeleteUser: false }),

  isOpenConfigUser: false,
  onOpenConfigUser: () => set({ isOpenConfigUser: true }),
  onCloseConfigUser: () => set({ isOpenConfigUser: false }),

  isOpenNewDirectory: false,
  onOpenNewDirectory: () => set({ isOpenNewDirectory: true }),
  onCloseNewDirectory: () => set({ isOpenNewDirectory: false }),

  isOpenDeleteTask: false,
  onOpenDeleteTask: () => set({ isOpenDeleteTask: true }),
  onCloseDeleteTask: () => set({ isOpenDeleteTask: false }),

  currentTaskSelected: undefined,
  setCurrentTaskSelected: (task) => set({ currentTaskSelected: task }),
  isOpenNewTask: false,
  onOpenNewTask: () => set({ isOpenNewTask: true }),
  onCloseNewTask: () => set({ isOpenNewTask: false }),

  currentDirectorySelected: undefined,
  setCurrentDirectorySelected: (directory) => set({ currentDirectorySelected: directory }),
  isOpenDeleteDirectory: false,
  onOpenDeleteDirectory: () => set({ isOpenDeleteDirectory: true }),
  onCloseDeleteDirectory: () => set({ isOpenDeleteDirectory: false }),
}));

