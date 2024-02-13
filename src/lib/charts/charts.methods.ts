import { ChartFilter } from "@/types/charts";
import { MessagesStructure } from "@/types/core";

export type CountMessagesByPersonResType = {
  [key: string]: MessagesStructure[];
};

export const countMessagesByPerson = (
  messages: MessagesStructure[],
  filter: ChartFilter
): CountMessagesByPersonResType => {
  const persons = {};
  messages.forEach((msg) => {
    const key = Object.keys(msg.uniqueName)[0];
    if (persons[key]) persons[key].push(msg);
    else if (msg.uniqueName) {
      persons[key] = [];
      persons[key].push(msg);
    }
  });

  return filter.key != "custom" ? sort(persons, filter) : persons;
};

function sort(obj: object, filter: ChartFilter) {
  let arr = Object.entries(obj);

  arr.sort(function (a, b) {
    return a[1].length - b[1].length;
  });

  return Object.fromEntries(filter.key == "topUsers" ? arr.reverse() : arr);
}

export const methods = {
  countMessagesByPerson,
};

export type Methods = typeof methods;
