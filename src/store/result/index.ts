import { ExportedDataFromChat, MessagesStructure, SupportedApplications } from "@/types/core";
import { ResultStore } from "@/types/store";
import { create } from "zustand";

const useResultStore = create<ResultStore>((set) => ({
  exportedMessages: {
    dateFormat: null,
    messages: [],
  },
  results: null,
  filters: {
    view: 1,
  },
  updateExportedMessages: (data: ExportedDataFromChat) =>
    set((prevState) => ({
      ...prevState,
      exportedMessages: data,
    })),
  resetExportedMessages: () =>
    set((prevState) => ({
      ...prevState,
      dateFormat: null,
      messages: [],
    })),
  updateResults: (data: ExportedDataFromChat) =>
    set((prevState) => ({
      ...prevState,
      results: data,
    })),
  resetResults: () =>
    set((prevState) => ({
      results: {
        ...prevState,
        dateFormat: null,
        messages: [],
      },
    })),

  updateFilters: (filters) =>
    set((prevState) => ({
      ...prevState,
      filters: filters,
    })),
}));

export default useResultStore;
