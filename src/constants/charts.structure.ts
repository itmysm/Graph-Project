import { ChartStructure } from "@/types/constant";

const whatsapp = {
  allMessages_BarLineSmooth: { chart: "BarSmooth", title: "allMessages" },
  messagesByPerson_Pie: { chart: "Pie", title: "messagesByPerson" },
};

const telegram = {
  allMessages_BarLineSmooth: { chart: "BarSmooth", title: "allMessages" },
  messagesByPerson_Pie: { chart: "Pie", title: "messagesByPerson" },
};

const instagram = {
  allMessages_BarLineSmooth: { chart: "BarSmooth", title: "allMessages" },
  messagesByPerson_Pie: { chart: "Pie", title: "messagesByPerson" },
};

const defaultStructure = {
  allMessages_BarLineSmooth: { chart: "BarSmooth", title: "allMessages" },
};

export const chartsStructures = {
  whatsapp,
  instagram,
  telegram,
  defaultStructure,
};
