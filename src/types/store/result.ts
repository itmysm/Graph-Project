import { ResponseMainFlowMethods } from "@/constants";
import { MessagesStructure } from "../core";

export type ResultStore = {
  exportedMessages: MessagesStructure[] | [];
  results: ResponseMainFlowMethods[keyof ResponseMainFlowMethods] | null;
  updateExportedMessages: (data: MessagesStructure[]) => void;
  resetExportedMessages: () => void;
  updateResults: (
    data: ResponseMainFlowMethods[keyof ResponseMainFlowMethods]
  ) => void;
  resetResults: () => void;
};
