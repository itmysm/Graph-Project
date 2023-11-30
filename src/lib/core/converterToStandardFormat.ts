import moment from "moment";
import { ReadFile } from "@/lib/core/index";
import { messagePatterns } from "@/types/patterns/whatsapp";
import { Application, structures, whatsappOS } from "@/types/core";
import { set } from "idb-keyval";

const fileReader = new ReadFile();

let messages: structures["message"]["whatsapp"][] = [];
let detectedOS: null | whatsappOS = null;

const defaultDate = "1/24/23, 3:42:06 in the afternoon";

export async function convertToStandardStructure(file: File, application: Application) {
  reset();

  switch (application.app) {
    case "whatsapp":
      detectedOS = application.os;
      whatsapp(file);
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
    msg.unixTime = moment(date, 'M/D/YY, h:mm A').unix();
    msg.sender = message.match(messagePatterns.whatsapp.sender[detectedOS])?.[0] || "unauthorized";
    msg.message = message.match(messagePatterns.whatsapp.message[detectedOS])?.[0];
    msg.periods = []

    messages.push(msg);
  } else if (messages.length > 0) {
    const indexOfLastItem = messages.length - 1;
    let lastMessageInList: structures["message"]["whatsapp"] = messages[indexOfLastItem];
    lastMessageInList.message += `\n\r ${message}`;
    messages[indexOfLastItem] = lastMessageInList;
  } else {
    // here may I should handle errors! but for now I prefer not
  }
}

async function saveResultsInDB() {
  await set("exportedMessages", messages);
}

function reset() {
  detectedOS = null;
  messages = [];
}
