import moment from "moment";
import { MessagesStructure } from "@/types/core";
import { Periods } from "@/types/core";
import { getPeriods } from "@/util/general/getters";

type Info = {
  type: "flat" | "nested" | "nestedX2";
};

type ResultTypeMessageByPerson = {
  data: {
    [key: string]: MessagesStructure[];
  };

  info: Info;
}; // x { "24h": [] }

async function countMessagesByPerson(messages: MessagesStructure[]) {
  const persons: ResultTypeMessageByPerson = {
    data: {},
    info: { type: "nested" },
  };
  messages.forEach((msg) => {
    const key = Object.keys(msg.uniqueName)[0];
    if (persons.data[key]) persons.data[key].push(msg);
    else if (msg.uniqueName) {
      persons.data[key] = [];
      persons.data[key].push(msg);
    }
  });

  return await persons;
}

type ResultTypeMessagesInPeriods = {
  data: {
    [key in Periods]?:
      | {
          [key: number]: number;
        }
      | {
          [key: string]: number;
        };
  };

  info: Info;
};

async function mostMessagesInTimePeriod(messages: MessagesStructure[]) {
  const periods: ResultTypeMessagesInPeriods = {
    data: {
      "24h": {},
      week: {},
      month: {},
      year: {},
    },

    info: {
      type: "nestedX2",
    },
  };
  messages.forEach((msg) => {
    const date = moment(msg.unixTime);
    const hour = date.format("HH");
    const day = date.format("D");
    const dayOfWeek = date.format("dddd").toLocaleLowerCase();
    const monthName = date.format("MMMM").toLocaleLowerCase();

    periods.data["24h"][hour] = (periods.data["24h"][hour] || 0) + 1;
    periods.data["month"][day] = (periods.data["month"][day] || 0) + 1;
    periods.data["week"][dayOfWeek] = (periods.data["week"][dayOfWeek] || 0) + 1;
    periods.data["year"][monthName] = (periods.data["year"][monthName] || 0) + 1;
  });

  return periods;
}

export type AllMainFlowMethods = {
  countMessagesByPerson: (messages: MessagesStructure[]) => ResultTypeMessageByPerson;

  mostMessagesInTimePeriod: (messages: MessagesStructure[]) => [];
};

export const MainFlowMethodsByApplication = {
  whatsapp: [countMessagesByPerson, mostMessagesInTimePeriod],
};

export type ResponseMainFlowMethods = {
  whatsapp: {
    countMessagesByPerson: ResultTypeMessageByPerson;
    mostMessagesInTimePeriod: ResultTypeMessagesInPeriods;
  };
  instagram: {};
  telegram: {};
};
