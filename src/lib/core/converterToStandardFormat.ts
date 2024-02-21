import moment from "moment";
import { ReadFile } from "@/lib/core/index";
import { messagePatterns } from "@/types/patterns/whatsapp";
import { Application, WhatsappOS, MessagesStructure, ExportedDataFromChat } from "@/types/core";
import { set } from "idb-keyval";

const fileReader = new ReadFile();

let exportedDataFromChat: ExportedDataFromChat = {
  dateFormat: null,
  messages: [],
};
let detectedOS: null | WhatsappOS = null;

const defaultDate = "1/24/23, 3:42:06 in the afternoon";
let detectedDateFormat: "MDY" | "DMY" = null;

export async function convertToStandardStructure(file: File, application: Application) {
  reset();

  switch (application.app) {
    case "whatsapp":
      detectedOS = application.os;
      await whatsapp(file);
      await saveResultsInDB();
      break;

    default:
      break;
  }
}

async function whatsapp(file: File) {
  await fileReader.lineByLine(file, ExportMessagesFromEachLineOfData);
}

function ExportMessagesFromEachLineOfData(message: string) {
  if (detectedOS == null) {
    window.alert("Error: in ExportMessagesFromEachLineOfData => OS has not been detected!");
    return;
  }

  const msg: any = {};

  // check this line/message have the correct structure of a message in whatsapp based on the OS version!
  // in some cases in a whatsapp message some text's go to next line here i detect them and combine with last saved item in array.

  if (messagePatterns.whatsapp.version[detectedOS].test(message)) {
    const date = message.match(messagePatterns.whatsapp.date[detectedOS])?.[0] || defaultDate;
    msg.unixTime = generateUnixTime(date);
    msg.sender = message.match(messagePatterns.whatsapp.sender[detectedOS])?.[0] || "unauthorized";
    msg.message = message.match(messagePatterns.whatsapp.message[detectedOS])?.[detectedOS == "android" ? 1 : 0];
    msg.periods = [];
    msg.uniqueName = "";

    exportedDataFromChat.messages.push(msg);
  } else if (exportedDataFromChat.messages.length > 0) {
    const indexOfLastItem = exportedDataFromChat.messages.length - 1;
    let lastMessageInList: MessagesStructure = exportedDataFromChat.messages[indexOfLastItem];
    lastMessageInList.message += `\n\r ${message}`;
    exportedDataFromChat.messages[indexOfLastItem] = lastMessageInList;
  } else {
    // here may I should handle errors! but for now I prefer not
  }
}

function generateUnixTime(date) {
  if (detectedDateFormat == null) {
    // calc both possible date format until we detect the correct format! the problem is whatsapp give not any info about the date format!
    let mdy = moment(date, "M/D/YY, h:mm A").unix();
    let dmy = moment(date, "D/M/YY, h:mm A").unix();

    if (!mdy || !dmy) {
      detectedDateFormat = mdy ? "MDY" : "DMY";
      exportedDataFromChat.dateFormat = detectedDateFormat;
    }

    return {
      mdy: mdy,
      dmy: dmy,
    };
  } else {
    return {
      [detectedDateFormat]: moment(date, detectedDateFormat === "MDY" ? "M/D/YY, h:mm A" : "D/M/YY, h:mm A").unix(),
    };
  }
}

async function saveResultsInDB() {
  await set("exportedMessages", {
    ...exportedDataFromChat,
    defaultDate: exportedDataFromChat.dateFormat == null ? "MDY" : exportedDataFromChat.dateFormat,
  });
}

function reset() {
  detectedOS = null;
  exportedDataFromChat.dateFormat = null;
  exportedDataFromChat.messages = [];
}
