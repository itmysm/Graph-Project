import { create } from "zustand";
import { AppStore, Status, FileInfo } from "@/types/store";

const useAppStore = create<AppStore>((set) => ({
  status: {
    state: 1,
    isFileUploaded: false,
    isFileSizeToLarge: false,
  },
  fileInfo: null,

  updateStatus: (updatedStatus: Status) =>
    set((state) => ({
      ...state,
      status: {
        ...state.status,
        ...updatedStatus,
      },
    })),

  updatedFileInfo: (updatedFileInfo: FileInfo) =>
    set((state) => ({
      ...state,
      fileInfo: {
        ...state.fileInfo,
        ...updatedFileInfo,
      },
    })),
}));

export default useAppStore;
