import { MessagesStructure } from "@/types/core";

export type CountMessagesByPersonResType = {
  [key: string]: MessagesStructure[];
};

export const countMessagesByPerson = (
  messages: MessagesStructure[]
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

  return persons;
};

export const methods = {
  countMessagesByPerson,
};

export type Methods = typeof methods;
