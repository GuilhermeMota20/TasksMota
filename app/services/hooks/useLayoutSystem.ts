import { create } from "zustand";

type LayoutSystem = {
  isNavHorizontal: boolean;
  onSetIsNavHorizontal: () => void;
  onRevertNavHorizontal: () => void;
  isLayoutExpanded: boolean;
  toggleLayoutExpanded: () => void;
};

export const useLayoutSystem = create<LayoutSystem>((set, get) => ({
  isNavHorizontal: false,
  onSetIsNavHorizontal: () => set({ isNavHorizontal: true }),
  onRevertNavHorizontal: () => set({ isNavHorizontal: false }),

  isLayoutExpanded: true,
  toggleLayoutExpanded: () => set({ isLayoutExpanded: !get().isLayoutExpanded })
}));
