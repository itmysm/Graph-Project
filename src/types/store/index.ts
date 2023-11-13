export type AppStore = {
  appearance: Appearance;
  status: Status;
  fileInfo: FileInfo | null;
};

export type Status = {
  state: number;
  isFileUploaded: Boolean;
  isFileSizeToLarge: Boolean;
};
export type FileInfo = {
  name: string;
  extension: string;
  size: number;
  date: string;
};

export type Appearance = {
  lang: string;
  dir: string;
  theme: string;
};
