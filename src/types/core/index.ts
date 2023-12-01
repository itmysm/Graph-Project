export type Config = {
  isTargetReached: boolean;
  application: Application;
};

export type Application = {
  os: null | whatsappOS;
  app: "whatsapp" | "instagram" | "telegram" | null;
};
export type whatsappOS = "android" | "ios";

export type structures = {
  message: {
    whatsapp: {
      date: string;
      message: string;
      sender: string;
      unixTime: number;
      uniqueName: object;
      periods: ["24h" | "week" | "month" | "sixMonth" | "year" | "all"];
    };
  };
};
