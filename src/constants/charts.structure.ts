import { ChartStructure } from "@/types/charts";
import { chartsConfig } from ".";
import { MainFlowMethods } from "@/constants";

type ValidStructures = { [key: string]: ChartStructure };

const whatsapp: ValidStructures = {
  allMessages_BarLineSmooth: { options: chartsConfig.barSmooth, title: "allMessages", target: "countAllMessages" },
  messagesByPerson_Pie: { options: chartsConfig.pie, title: "messagesByPerson", target: "countAllMessages" },
};

const telegram: ValidStructures = {
  allMessages_BarLineSmooth: { options: chartsConfig.barSmooth, title: "allMessages", target: "countAllMessages" },
  messagesByPerson_Pie: { options: chartsConfig.pie, title: "messagesByPerson", target: "countAllMessages" },
};

const instagram: ValidStructures = {
  allMessages_BarLineSmooth: { options: chartsConfig.barSmooth, title: "allMessages", target: "countAllMessages" },
  messagesByPerson_Pie: { options: chartsConfig.pie, title: "messagesByPerson", target: "countAllMessages" },
};

const defaultStructure: ValidStructures = {
  allMessages_BarLineSmooth: { options: chartsConfig.barSmooth, title: "allMessages", target: "countAllMessages" },
  messagesByPerson_Pie: { options: chartsConfig.pie, title: "messagesByPerson", target: "countAllMessages" },
};

export const allCharts = {
  whatsapp,
  instagram,
  telegram,
  defaultStructure,
};
