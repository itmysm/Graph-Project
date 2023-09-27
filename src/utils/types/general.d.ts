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
