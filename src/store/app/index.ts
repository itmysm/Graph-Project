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
    name: '',
    extension: '',
    size: 1,
    date: '',
  },
  
  updateAppearance: (appearance: Appearance) =>
    set((state) => ({
      appearance: appearance,
    })),
  
  updateFileInfo: (newFile: FileInfo) =>
    set((state) => ({
      fileInfo: newFile,
    })),
}));

export default useAppStore;
