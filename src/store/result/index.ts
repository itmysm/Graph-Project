import { ResponseMainFlowMethods } from "@/constants";
import { MessagesStructure, SupportedApplications } from "@/types/core";
import { ResultStore } from "@/types/store";
import { create } from "zustand";

const useResultStore = create<ResultStore>((set) => ({
  exportedMessages: [],
  results: null,
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
  updateResults: (
    data: ResponseMainFlowMethods[keyof ResponseMainFlowMethods]
  ) =>
    set((prevState) => ({
      ...prevState,
      results: data,
    })),
  resetResults: () =>
    set((prevState) => ({
      ...prevState,
      results: [],
    })),
}));

export default useResultStore;
