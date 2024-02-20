import { create } from "zustand";

type ListInViewStore = {
  isListInView: boolean;
  toggleListInView: () => void;
};

export const useFormatListInView = create<ListInViewStore>((set, get) => ({
  isListInView: false,
  toggleListInView: () => set({ isListInView: !get().isListInView })
}));