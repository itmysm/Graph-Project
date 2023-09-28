export interface FileUploadType {
  name: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  buffer: Buffer;
  destination: string;
  filename: string;
}

export interface ApplicationType {
  app: String | Null;
  os: String | Null;
}

export interface MessageType {
  owner: String,
  content: String,
  date: String,
  time: String,
  log: Object,
  type: "unauthorized" | undefined
}

export type DefaultOperationSystems = "Android" | "IOS"