import { MessagesStructure } from "@/types/core";
import { ResultStore } from "@/types/store";
import { create } from "zustand";

const useResultStore = create<ResultStore>((set) => ({
  exportedMessages: [],
  updateExportedMessages: (data: MessagesStructure[]) =>
    set(() => ({
      exportedMessages: data,
    })),
  resetResults: () =>
    set(() => ({
      exportedMessages: [],
    })),
}));

export default useResultStore;
