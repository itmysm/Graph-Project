import { create } from "zustand";
import { AppStore, Status, FileInfo, Appearance } from "@/types/store";

const useAppStore = create<AppStore>((set) => ({
  appearance: {
    lang: "en",
    dir: "ltr",
    theme: "dark",
  },
  status: {
    state: 1,
    isFileUploaded: false,
    isFileSizeToLarge: false,
  },
  fileInfo: null,

  updateAppearance: (updatedAppearance: Appearance) =>
    set((state) => ({
      ...state,
      appearance: {
        ...state.appearance,
        ...updatedAppearance,
      },
    })),

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
