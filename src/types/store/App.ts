export type AppStore = {
  appearance: Appearance;
  status: Status;
  fileInfo: FileInfo;
  updateAppearance: (appearance: Appearance) => void;
  updateFileInfo: (fileInfo: FileInfo) => void;
  updateStatus: (updatedStatus: Status) => void;
};

export type Status = {
  state: number;
  isFileUploaded: Boolean;
  isFileSizeToLarge: Boolean;
};
export type FileInfo = {
  name: string;
  // extension: string;
  size: number;
  type: string | undefined;
  date: number | undefined;
  uploadDate: number | undefined;
};

export type Appearance = {
  lang: string;
  dir: string;
  theme: string;
};
