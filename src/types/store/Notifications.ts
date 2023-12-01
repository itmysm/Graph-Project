export type NotificationStore = {
  listNotifications: Notification[] | [];
  addNewAlert: (newNotification: Notification) => void;
  deleteAlertById: (id: number) => void;
};

export type Notification = {
  type: string;
  title: string;
  content: string;
  color?: string;
  bgColor?: string;
  timeout?: number;
  id: number;
};

// export type Status = {
//   state: number;
//   isFileUploaded: Boolean;
//   isFileSizeToLarge: Boolean;
// };
// export type FileInfo = {
//   name: string;
//   // extension: string;
//   type: string;
//   size: number;
//   date: number;
//   uploadDate: number;
// };

// export type Appearance = {
//   lang: string;
//   dir: string;
//   theme: string;
// };
