import { AppStore, Status, FileInfo, Appearance } from "@/types/store";
import { create } from "zustand";

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
  fileInfo: {
    name: "",
    extension: undefined,
    application: undefined,
    size: 1,
    date: undefined,
    uploadDate: undefined,
    type: undefined,
  },

  updateAppearance: (appearance: Appearance) =>
    set(() => ({
      appearance: appearance,
    })),

  updateFileInfo: (newFile: FileInfo) =>
    set(() => ({
      fileInfo: newFile,
    })),

  updateStatus: (updatedStatus: Status) =>
    set(() => ({
      status: updatedStatus,
    })),
  reset: () =>
    set(() => ({
      status: {
        state: 1,
        isFileUploaded: false,
        isFileSizeToLarge: false,
      },
    })),
}));

export default useAppStore;
