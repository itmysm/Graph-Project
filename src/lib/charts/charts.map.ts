import { ValueOf } from "next/dist/shared/lib/constants";
import {
  CountMessagesByPersonResType,
  methods,
  Methods,
} from "./charts.methods";
import { MessagesStructure, SupportedApplications } from "@/types/core";
import { typesCharts } from "./charts.options";
import { ChartFilter, ChartRules } from "@/types/charts";

type AvailableCharts = "pie" | "bar";

export const chartsStyle = {
  commonStyles: "w-full sm:w-3/5 md:max-w-[47%] lg:w-1/3 h-fit",
};

export type ChartType = {
  title: string;
  defaultOptions: object;
  target: (messages: MessagesStructure[], filters: ChartFilter) => any;
  chart: AvailableCharts;
  styles: string;
  rules: ChartRules;
};

export const whatsapp: { [key: string]: ChartType } = {
  messagesByPerson_pie: {
    chart: "pie",
    title: "messagesByPerson",
    defaultOptions: typesCharts.pie,
    styles: chartsStyle.commonStyles,
    rules: { minItems: 2, maxItems: 16 },
    target: (messages, filter) => {
      const result = methods.countMessagesByPerson(messages, filter);
      const chartOptions = typesCharts.pie;

      const finalResult = [];
      Object.keys(result).map((key) => {
        if (filter.key === "custom" && filter.value.includes(key)) {
          finalResult.push({
            value: result[key].length,
            name: result[key][0].sender,
          });
        } else if (filter.key !== "custom") {
          finalResult.push({
            value: result[key].length,
            name: result[key][0].sender,
          });
        }
      });

      chartOptions.series[0].data = finalResult;
      return chartOptions;
    },
  },

  messagesByPerson_Bar: {
    chart: "bar",
    title: "messagesByPerson",
    defaultOptions: typesCharts.barBasic,
    styles: chartsStyle.commonStyles,
    rules: { minItems: 2, maxItems: 20 },

    target: (messages, filter) => {
      const result = methods.countMessagesByPerson(messages, filter);
      const chartOptions = typesCharts.barBasic;

      const finalResult = [];
      const xAxisData = [];
      Object.keys(result).map((key) => {
        if (filter.key === "custom" && filter.value.includes(key)) {
          xAxisData.push(result[key][0].sender);
          finalResult.push(result[key].length);
        } else if (filter.key !== "custom") {
          xAxisData.push(result[key][0].sender);
          finalResult.push(result[key].length);
        }
      });

      chartOptions.xAxis[0].show = false;
      chartOptions.xAxis[0].data = xAxisData;
      chartOptions.series[0].data = finalResult;

      return chartOptions;
    },
  },
};

export const instagram: { [key: string]: ChartType } = {
  messagesByPerson_pie: {
    chart: "pie",
    title: "messagesByPerson",
    target: (messages, filters) => {},
    defaultOptions: typesCharts.pie,
    styles: chartsStyle.commonStyles,
    rules: {
      minItems: 0,
      maxItems: 0,
    },
  },
};

export const telegram: { [key: string]: ChartType } = {
  messagesByPerson_pie: {
    title: "messagesByPerson",
    target: (messages, filters) => {},
    chart: "pie",
    defaultOptions: typesCharts.pie,
    styles: chartsStyle.commonStyles,
    rules: {
      minItems: 0,
      maxItems: 0,
    },
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
