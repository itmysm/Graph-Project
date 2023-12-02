export type Config = {
  isTargetReached: boolean;
  application: Application;
};

export type Application = {
  os: null | WhatsappOS;
  app: "whatsapp" | "instagram" | "telegram" | null;
};
export type WhatsappOS = "android" | "ios";

export type Structures = {
  message: {
    whatsapp: {
      date: string;
      message: string;
      sender: string;
      unixTime: number;
      uniqueName: object;
      periods: Periods[];
    };
  };
};

export type Periods = "24h" | "week" | "month" | "sixMonth" | "year" | "all"