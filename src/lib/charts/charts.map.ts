import { ValueOf } from "next/dist/shared/lib/constants";
import {
  CountMessagesByPersonResType,
  methods,
  Methods,
} from "./charts.methods";
import { MessagesStructure, SupportedApplications } from "@/types/core";
import { typesCharts } from "./charts.options";

type availableCharts = "pie" | "bar";

export const chartsStyle = {
  commonStyles: "w-full sm:w-3/5 md:max-w-[47%] lg:w-1/3 h-fit",
};

export type ChartType = {
  title: string;
  defaultOptions: object;
  target: ValueOf<Methods>;
  chart: availableCharts;
  styles: string;
  viewGroup: number[];
  func?: (res) => any;
};

export const whatsapp: { [key: string]: ChartType } = {
  messagesByPerson_pie: {
    title: "messagesByPerson",
    target: methods.countMessagesByPerson,
    chart: "pie",
    defaultOptions: typesCharts.pie,
    styles: chartsStyle.commonStyles,
    viewGroup: [0, 1],
    func: (res: CountMessagesByPersonResType) => {
      const chartOptions = typesCharts.pie;
      const result = [];
      Object.keys(res).map((key) => {
        result.push({ value: res[key].length, name: res[key][0].sender });
      });

      chartOptions.series[0].data = result;
      return chartOptions;
    },
  },

  messagesByPerson_Bar: {
    title: "messagesByPerson",
    target: methods.countMessagesByPerson,
    chart: "bar",
    defaultOptions: typesCharts.barBasic,
    styles: chartsStyle.commonStyles,
    viewGroup: [0, 1],
    func: (res: CountMessagesByPersonResType) => {
      const chartOptions = typesCharts.barBasic;
      const xAxisData = [];
      const result = [];
      Object.keys(res).map((key) => {
        xAxisData.push(res[key][0].sender);
        result.push(res[key].length);
      });

      chartOptions.xAxis[0].show = false
      chartOptions.xAxis[0].data = xAxisData;
      chartOptions.series[0].data = result;
      return chartOptions;
    },
  },
};

export const instagram: { [key: string]: ChartType } = {
  messagesByPerson_pie: {
    title: "messagesByPerson",
    target: methods.countMessagesByPerson,
    chart: "pie",
    defaultOptions: typesCharts.pie,
    viewGroup: [0, 1],
    styles: chartsStyle.commonStyles,
  },
};

export const telegram: { [key: string]: ChartType } = {
  messagesByPerson_pie: {
    title: "messagesByPerson",
    target: methods.countMessagesByPerson,
    chart: "pie",
    defaultOptions: typesCharts.pie,
    viewGroup: [0, 1],
    styles: chartsStyle.commonStyles,
  },
};

export type Charts = {
  [key in SupportedApplications]: { [key: string]: ChartType };
};
export const charts: Charts = {
  whatsapp,
  instagram,
  telegram,
};
