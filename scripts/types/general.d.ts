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

export type MessagesType = MessageType[];

export interface MessageType {
  owner: String;
  content: String;
  date: String;
  time: String;
  log: Object;
  type: "unauthorized" | undefined;
  messageTimePeriods: MessageTimePeriodsType;
  messageInfo: MessageInfoType;
  uniqKeyName: uniqKeyName;
}

export interface MessageTimePeriodsType {
  key: string;
  identifier: string;
}

export interface MessageInfoType {
  daysOfMonth: string;
  daysOfWeek: string;
  hoursOfDay: string;
  monthsOfSixMonth: string;
  monthsOfYear: string;
  year: string;
}

export type uniqKeyName = string;
export type DefaultOperationSystems = "android" | "ios";
