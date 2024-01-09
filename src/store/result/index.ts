import { MessagesStructure, SupportedApplications } from "@/types/core";
import { ResultStore } from "@/types/store";
import { create } from "zustand";

const useResultStore = create<ResultStore>((set) => ({
  exportedMessages: [],
  results: null,
  filters: {
    view: "View all",
  },
  updateExportedMessages: (data: MessagesStructure[]) =>
    set((prevState) => ({
      ...prevState,
      exportedMessages: data,
    })),
  resetExportedMessages: () =>
    set((prevState) => ({
      ...prevState,
      exportedMessages: [],
    })),
  updateResults: (data: MessagesStructure[]) =>
    set((prevState) => ({
      ...prevState,
      results: data,
    })),
  resetResults: () =>
    set((prevState) => ({
      ...prevState,
      results: [],
    })),

  updateFilters: (filters) =>
    set((prevState) => ({
      ...prevState,
      filters: filters,
    })),
}));

export default useResultStore;
