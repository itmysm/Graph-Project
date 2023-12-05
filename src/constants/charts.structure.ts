import { ChartStructure } from "@/types/charts";
import { chartsConfig } from ".";

const whatsapp = {
  allMessages_BarLineSmooth: { options: chartsConfig.barSmooth, title: "allMessages" },
  messagesByPerson_Pie: { options: chartsConfig.pie, title: "messagesByPerson", type: "" },
};

const telegram = {
  allMessages_BarLineSmooth: { options: chartsConfig.barSmooth, title: "allMessages" },
  messagesByPerson_Pie: { options: chartsConfig.pie, title: "messagesByPerson" },
};

const instagram = {
  allMessages_BarLineSmooth: { options: chartsConfig.barSmooth, title: "allMessages" },
  messagesByPerson_Pie: { options: chartsConfig.pie, title: "messagesByPerson" },
};

const defaultStructure = {
  allMessages_BarLineSmooth: { options: chartsConfig.barSmooth, title: "allMessages" },
};

export const chartsStructures = {
  whatsapp,
  instagram,
  telegram,
  defaultStructure,
};
