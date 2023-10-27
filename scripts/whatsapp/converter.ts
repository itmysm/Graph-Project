// This script takes a list of messages as input, extracts the time, date, sender's name, and message content from each message,
// organizes this information into an object, and then returns the object.

import { messagePatterns } from "../patterns/index.js";

const now = moment(); // Creates a moment object representing the current date and time

const defaultDate = "1/1/11, 3:42:06 in the afternoon";
export const whatsappConverter = (chats: string[], dataStructure: "android" | "ios" = "android") => {
  const messages: object[] = [];
  const defaultDate = "1/24/23, 3:42:06 in the afternoon";

  chats.forEach((message: string, index) => {
    const msg: any = {};
    const date = message.match(messagePatterns.whatsapp.date[dataStructure])?.[0] || defaultDate;
    msg.unixTime = moment(date, "M/D/YY, h:mm:ss A").unix();
    msg.sender = message.match(messagePatterns.whatsapp.sender[dataStructure])?.[0] || "unauthorized";
    msg.message = message.match(messagePatterns.whatsapp.message[dataStructure])?.[0];

    messages.push(msg);
  });

  return messages;
};
