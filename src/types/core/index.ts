export type Config = {
  isTargetReached: boolean;
  application: Application;
};

export type Application = {
  os: null | WhatsappOS;
  app: SupportedApplications;
};
export type SupportedApplications = "whatsapp" | "instagram" | "telegram";
export type WhatsappOS = "android" | "ios";

export type Structures = {
  message: {
    whatsapp: whatsapp[];
  };
};

export type whatsapp = {
  date: string;
  message: string;
  sender: string;
  unixTime: number;
  uniqueName: object;
  periods: Periods[];
};

export type Periods = "24h" | "week" | "month" | "sixMonth" | "year" | "all";
