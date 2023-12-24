import { MessagesStructure } from "@/types/core";
import { Periods } from "@/types/core";
import { getPeriods } from "@/util/general/getters";

type simpleChartData = {
  [key: string]: [];
};
export type ChartResultType = simpleChartData;

type ResultTypeMessageByPerson = {
  [key: string]: MessagesStructure[];
};

async function countMessagesByPerson(messages: MessagesStructure[]) {
  const persons: ResultTypeMessageByPerson = {};
  messages.forEach((msg) => {
    const key = Object.keys(msg.uniqueName)[0];
    if (persons[key]) persons[key].push(msg);
    else {
      persons[key] = [];
      persons[key].push(msg);
    }
  });

  return await persons;
}

export type AllMainFlowMethods = {
  countMessagesByPerson: (messages: MessagesStructure[]) => ResultTypeMessageByPerson;
};

export const MainFlowMethodsByApplication = {
  whatsapp: [countMessagesByPerson],
};
export type ResponseMainFlowMethods = {
  whatsapp: [ResultTypeMessageByPerson];
};
