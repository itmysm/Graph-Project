import { MessagesStructure } from "@/types/core";

const countAllMessages = (data: MessagesStructure[]) => {
  return data.length;
};

export type MainFlowMethods = {
  countAllMessages: (data: MessagesStructure[]) => [];
};

export const mainFlowMethods = {
  countAllMessages,
};
