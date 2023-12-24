import { EChartOption as BaseEChartOption } from "echarts";
import { AllMainFlowMethods, allCharts } from "@/constants";
import { SupportedApplications } from "@/types/core/index";

export type AvailableCharts = "pie" | "bar";
export type AllCharts = typeof allCharts;
export type TargetCharts = AllCharts[SupportedApplications | "defaultStructure"];
export type ChartStructure = { options: object; title: string; target: keyof AllMainFlowMethods; chart: AvailableCharts };
export type ChartsTargetKeys = { [key in keyof (typeof allCharts)[SupportedApplications]]: string };
export type StructureOfChartOptions = BaseEChartOption;
