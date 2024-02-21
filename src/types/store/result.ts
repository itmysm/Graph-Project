import { ExportedDataFromChat, MessagesStructure } from "../core";

export type Filters = {
  view: number;
};

export type ResultStore = {
  exportedMessages: ExportedDataFromChat | null;
  results: ExportedDataFromChat | null;
  filters: Filters;
  updateExportedMessages: (data: ExportedDataFromChat) => void;
  resetExportedMessages: () => void;
  updateResults: (data: ExportedDataFromChat) => void;
  resetResults: () => void;
  updateFilters: (settings: Filters) => void;
};
