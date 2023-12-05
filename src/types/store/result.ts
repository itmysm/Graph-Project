import { MessagesStructure } from "../core";

export type ResultStore = {
  exportedMessages: MessagesStructure[] | [];
  updateExportedMessages: (data: MessagesStructure[]) => void;
  resetResults: () => void;
};
