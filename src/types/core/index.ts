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
  apps: {
    whatsapp: whatsappMessageStructure[];
    telegram: telegramMessageStructure[];
    instagram: instagramMessageStructure[];
  };
};
export type MessagesStructure = whatsappMessageStructure | instagramMessageStructure | telegramMessageStructure;
export type whatsappMessageStructure = {
  date: string;
  message: string;
  sender: string;
  unixTime: number;
  uniqueName: { [key: string]: string };
  periods: Periods[];
};

export type telegramMessageStructure = {
  date: string;
  message: string;
  sender: string;
  unixTime: number;
  uniqueName: { [key: string]: string };
  periods: Periods[];
};

export type instagramMessageStructure = {
  date: string;
  message: string;
  sender: string;
  unixTime: number;
  uniqueName: { [key: string]: string };
  periods: Periods[];
};

export type Periods = "24h" | "week" | "month" | "sixMonth" | "year" | "all";
