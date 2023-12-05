import { EChartOption as BaseEChartOption } from "echarts";
import { MainFlowMethods, allCharts } from "@/constants";
import { SupportedApplications } from "@/types/core/index";

export type AllCharts = typeof allCharts;
export type ChartsTarget = AllCharts[SupportedApplications | "defaultStructure"];
export type ChartStructure = { options: object; title: string; target: keyof MainFlowMethods };
export type ChartsTargetKeys = { [key in keyof (typeof allCharts)[SupportedApplications]]: string };
export type StructureOfChartOptions = BaseEChartOption;
