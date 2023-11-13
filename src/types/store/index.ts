export type AppStore = {
  status: Status
  fileInfo: FileInfo | null;
};


export type Status = {
  state: number,
  isFileUploaded: Boolean;
  isFileSizeToLarge: Boolean;
}
export type FileInfo = {
  name: string;
  extension: string;
  size: number;
  date: string;
};
