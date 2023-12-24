import { Periods } from "@/types/core";

export function getPeriods(): { [key: string]: Periods } {
  return {
    "24h": "24h",
    "1w": "week",
    "1m": "month",
    "6m": "sixMonth",
    "1y": "year",
    all: "all",
  };
}
