import { MessagesStructure } from "../core";

export type ResultStore = {
  exportedMessages: MessagesStructure[] | [];
  results: MessagesStructure[] | null;
  updateExportedMessages: (data: MessagesStructure[]) => void;
  resetExportedMessages: () => void;
  updateResults: (data: MessagesStructure[]) => void;
  resetResults: () => void;
};