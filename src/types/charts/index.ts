import { EChartOption as BaseEChartOption } from "echarts";
import { chartsStructures } from "@/constants";
import { SupportedApplications } from "@/types/core/index";

export type ChartsStructures = typeof chartsStructures;
export type ChartsStructure = ChartsStructures[SupportedApplications | "defaultStructure"];
export type ChartStructure = { options: ChartOptions; title: string };
export type ChartsStructuresKeys = { [key in keyof (typeof chartsStructures)[SupportedApplications]]: string };
export type ChartOptions = BaseEChartOption;