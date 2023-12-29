import { ChartStructure } from "@/types/charts";
import { chartsConfig } from ".";

type ValidStructures = { [key: string]: ChartStructure };

const whatsapp: ValidStructures = {
  allMessages_BarLineSmooth: { options: chartsConfig.barSmooth, title: "allMessages", target: "countMessagesByPerson", chart: "bar" },
  messagesByPerson_Pie: { options: chartsConfig.pie, title: "messagesByPerson", target: "countMessagesByPerson", chart: "pie" },
};

const telegram: ValidStructures = {
  allMessages_BarLineSmooth: { options: chartsConfig.barSmooth, title: "allMessages", target: "countMessagesByPerson", chart: "bar" },
  messagesByPerson_Pie: { options: chartsConfig.pie, title: "messagesByPerson", target: "countMessagesByPerson", chart: "pie" },
};

const instagram: ValidStructures = {
  allMessages_BarLineSmooth: { options: chartsConfig.barSmooth, title: "allMessages", target: "countMessagesByPerson", chart: "bar" },
  messagesByPerson_Pie: { options: chartsConfig.pie, title: "messagesByPerson", target: "countMessagesByPerson", chart: "pie" },
};

const defaultStructure: ValidStructures = {
  allMessages_BarLineSmooth: { options: chartsConfig.barSmooth, title: "allMessages", target: "countMessagesByPerson", chart: "bar" },
  messagesByPerson_Pie: { options: chartsConfig.pie, title: "messagesByPerson", target: "countMessagesByPerson", chart: "pie" },
};

export const allCharts = {
  whatsapp,
  instagram,
  telegram,
  defaultStructure,
};
