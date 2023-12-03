import { chartsStructures } from "@/constants";
import { SupportedApplications } from "@/types/core/index";

export type ChartsStructures = typeof chartsStructures;
export type ChartsStructure = ChartsStructures[SupportedApplications | "defaultStructure"];
export type ChartStructure = { chart: object; tile: string };
export type ChartsStructuresKeys = { [key in keyof (typeof chartsStructures)[SupportedApplications]]: string };
