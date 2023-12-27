import { get, keys, set } from "idb-keyval";
import { MessagesStructure } from "@/types/core";
import moment from "moment";
import { devLogger } from "../dev";
import useResultStore from "@/store/result";
import { uniqueNameGenerator } from "../general";
import {
  MainFlowMethodsByApplication,
  ResponseMainFlowMethods,
} from "@/constants";

const methodsQueue: ((
  messages: MessagesStructure[]
) => Promise<DesiredResultType[keyof DesiredResultType]>)[] = [];

const theFinalResults: DesiredResultType | {} = {};
const flowName = "whatsapp"; // this value is dynamic and not just for test
type DesiredResultType = ResponseMainFlowMethods[typeof flowName];
let exportedMessagesFromIndexDB: MessagesStructure[] | [] = [];

async function classificationByTime() {
  exportedMessagesFromIndexDB?.forEach((msg, index) => {
    msg.uniqueName = makeUniqueName(msg);
    const momentObj = moment.unix(msg.unixTime);
    const passedDays = moment().diff(momentObj, "days");

    if (passedDays <= 365 && passedDays >= 0) {
      msg.periods.push("year");

      if (passedDays <= 120) {
        msg.periods.push("sixMonth");

        if (passedDays <= 31) {
          msg.periods.push("month");

          if (passedDays <= 7) {
            msg.periods.push("week");

            if (passedDays == 0) {
              msg.periods.push("24h");
            }
          }
        }
      }
    } else {
      exportedMessagesFromIndexDB?.splice(index, 1);
      devLogger(
        `Item number ${index} has been deleted from the list in classificationByTime section`,
        "warning",
        true
      );
    }
  });

  await set("exportedMessages", exportedMessagesFromIndexDB);
}

function makeUniqueName(msg: MessagesStructure) {
  if (msg.sender === "unauthorized") {
    return { ["unauthorized"]: msg.sender };
  } else {
    const keyName = uniqueNameGenerator(msg.sender);
    return { [keyName]: msg.sender };
  }
}

export async function Analyzer() {
  exportedMessagesFromIndexDB = await get("exportedMessages");
  const methods = MainFlowMethodsByApplication[flowName];

  if (exportedMessagesFromIndexDB) {
    await classificationByTime();

    while (methods.length > 0) {
      const currentMethod = methods.shift();
      methodsQueue.push(currentMethod);
    }
    await processQueue();
  } else {
    window.alert(
      "Error: in ExportMessagesFromEachLineOfData => OS has not been detected!"
    );
    return;
  }
}

async function processQueue() {
  for (const method of methodsQueue) {
    theFinalResults[method.name] = await method(exportedMessagesFromIndexDB);
  }

  await set("results", theFinalResults);
}
