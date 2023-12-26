import moment from "moment";
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
    else if (msg.uniqueName) {
      persons[key] = [];
      persons[key].push(msg);
    }
  });

  return await persons;
}

type ResultTypeMessagesInPeriods =
  | {
      [key in Periods]:
        | {
            [key: number]: number;
          }
        | {
            [key: string]: number;
          };
    }
  | {};

async function mostMessagesInTimePeriod(messages: MessagesStructure[]) {
  const periods: ResultTypeMessagesInPeriods = {
    "24h": {},
    week: {},
    month: {},
    year: {},
  };
  messages.forEach((msg) => {
    const date = moment(msg.unixTime);
    const hour = date.format("HH");
    const day = date.format("D");
    const dayOfWeek = date.format("dddd").toLocaleLowerCase();
    const monthName = date.format("MMMM").toLocaleLowerCase();

    periods["24h"][hour] = (periods["24h"][hour] || 0) + 1;
    periods["month"][day] = (periods["month"][day] || 0) + 1;
    periods["week"][dayOfWeek] = (periods["week"][dayOfWeek] || 0) + 1;
    periods["year"][monthName] = (periods["year"][monthName] || 0) + 1;
  });
  console.log(periods);

  return periods;
}

export type AllMainFlowMethods = {
  countMessagesByPerson: (
    messages: MessagesStructure[]
  ) => ResultTypeMessageByPerson;

  mostMessagesInTimePeriod: (messages: MessagesStructure[]) => [];
};

export const MainFlowMethodsByApplication = {
  whatsapp: [countMessagesByPerson, mostMessagesInTimePeriod],
};
export type ResponseMainFlowMethods = {
  whatsapp: [ResultTypeMessageByPerson, ResultTypeMessagesInPeriods];
};
