import { MessagesStructure } from "../core";

export type Filters = {
  view: "View all" | "Tops" | "Active charts";
};

export type ResultStore = {
  exportedMessages: MessagesStructure[] | [];
  results: MessagesStructure[] | null;
  filters: Filters;
  updateExportedMessages: (data: MessagesStructure[]) => void;
  resetExportedMessages: () => void;
  updateResults: (data: MessagesStructure[]) => void;
  resetResults: () => void;
  updateFilters: (settings: Filters) => void;
};
